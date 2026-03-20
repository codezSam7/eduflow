import { useState } from 'react';
import { Calendar, Search, CheckCircle, XCircle, Users } from 'lucide-react';

export default function Attendance() {
    const [selectedClass, setSelectedClass] = useState('JSS 3A - Mathematics');
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [searchTerm, setSearchTerm] = useState('');

    const [students, setStudents] = useState([
        { id: 1, name: 'Aisha Mohammed', present: true },
        { id: 2, name: 'Chukwu Emeka', present: false },
        { id: 3, name: 'Fatima Bello', present: true },
        { id: 4, name: 'Ibrahim Yusuf', present: true },
        { id: 5, name: 'Ngozi Okonkwo', present: false },
        { id: 6, name: 'Tolu Adebayo', present: true },
        { id: 7, name: 'Zainab Abdullahi', present: true },
    ]);

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const togglePresent = (id) => {
        setStudents(students.map(s =>
            s.id === id ? { ...s, present: !s.present } : s
        ));
    };

    const markAllPresent = () => {
        setStudents(students.map(s => ({ ...s, present: true })));
    };

    const markAllAbsent = () => {
        setStudents(students.map(s => ({ ...s, present: false })));
    };

    const handleSubmit = () => {
        alert('Attendance submitted successfully! (Mock)');
    };

    const presentCount = students.filter(s => s.present).length;
    const absentCount = students.length - presentCount;

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Mark Attendance</h1>
                    <p className="text-gray-600 mt-1">Record who is present today</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                    <select
                        value={selectedClass}
                        onChange={(e) => setSelectedClass(e.target.value)}
                        className="border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <option>JSS 3A - Mathematics</option>
                        <option>JSS 2B - English</option>
                        <option>SSS 1C - Physics</option>
                    </select>

                    <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <SummaryCard
                    icon={<Users className="h-6 w-6 text-indigo-600" />}
                    title="Total Students"
                    value={students.length}
                    color="bg-indigo-50"
                />
                <SummaryCard
                    icon={<CheckCircle className="h-6 w-6 text-green-600" />}
                    title="Present"
                    value={presentCount}
                    color="bg-green-50"
                />
                <SummaryCard
                    icon={<XCircle className="h-6 w-6 text-red-600" />}
                    title="Absent"
                    value={absentCount}
                    color="bg-red-50"
                />
            </div>

            <div className="bg-white rounded-xl shadow overflow-hidden">
                <div className="p-6 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="relative w-full sm:w-64">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <input
                            type="text"
                            placeholder="Search student..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="flex gap-3 w-full sm:w-auto">
                        <button
                            onClick={markAllPresent}
                            className="flex-1 sm:flex-none px-4 py-2 bg-green-100 text-green-800 rounded-lg hover:bg-green-200 transition text-sm font-medium"
                        >
                            Mark All Present
                        </button>
                        <button
                            onClick={markAllAbsent}
                            className="flex-1 sm:flex-none px-4 py-2 bg-red-100 text-red-800 rounded-lg hover:bg-red-200 transition text-sm font-medium"
                        >
                            Mark All Absent
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Student Name
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredStudents.map((student) => (
                                <tr key={student.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {student.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${student.present
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-red-100 text-red-800'
                                            }`}>
                                            {student.present ? 'Present' : 'Absent'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={student.present}
                                                onChange={() => togglePresent(student.id)}
                                                className="sr-only peer"
                                            />
                                            <div className={`w-11 h-6 rounded-full peer transition-colors ${student.present ? 'bg-green-600' : 'bg-gray-300'
                                                } peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300`}>
                                                <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${student.present ? 'translate-x-5' : 'translate-x-0'
                                                    }`}></div>
                                            </div>
                                        </label>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="p-6 border-t border-gray-200 flex justify-between items-center">
                    <p className="text-sm text-gray-500">
                        {filteredStudents.length} student{filteredStudents.length !== 1 ? 's' : ''} shown
                    </p>
                    <button
                        onClick={handleSubmit}
                        className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Submit Attendance
                    </button>
                </div>
            </div>
        </div>
    );
}

function SummaryCard({ icon, title, value, color }) {
    return (
        <div className={`${color} rounded-xl shadow p-6`}>
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-600">{title}</p>
                    <p className="text-3xl font-bold mt-1">{value}</p>
                </div>
                <div className="p-3 rounded-lg bg-white bg-opacity-60">
                    {icon}
                </div>
            </div>
        </div>
    );
}