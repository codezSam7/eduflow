import { useState } from 'react';

export default function Students() {
    const [students] = useState([
        { id: 1, name: "John Doe", class: "JSS1", studentId: "STD001" },
        { id: 2, name: "Mary Jane", class: "SS2", studentId: "STD002" },
    ]);

    const [classes] = useState(["JSS1", "JSS2", "SS1", "SS2"]);
    const [showForm, setShowForm] = useState(false);
    const [newStudent, setNewStudent] = useState({
        name: "",
        class: "",
        studentId: "",
    });

    const handleAddStudent = () => {
        if (!newStudent.name || !newStudent.class || !newStudent.studentId) return;
        // Just UI - no real add for now
        setShowForm(false);
        setNewStudent({ name: "", class: "", studentId: "" });
    };

    return (
        <div className="space-y-6 md:space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Students</h1>
                <button
                    onClick={() => setShowForm(true)}
                    className="w-full sm:w-auto bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 font-medium flex items-center justify-center gap-2"
                >
                    <span>+</span>
                    <span>Add Student</span>
                </button>
            </div>

            {/* Table Card */}
            <div className="bg-white rounded-xl shadow overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[600px]">
                        <thead>
                            <tr className="border-b bg-gray-50">
                                <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase">Student ID</th>
                                <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                                <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase">Class</th>
                                <th className="py-4 px-6 text-right text-xs font-medium text-gray-500 uppercase">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {students.map((student) => (
                                <tr key={student.id} className="hover:bg-gray-50">
                                    <td className="py-4 px-6 whitespace-nowrap">{student.studentId}</td>
                                    <td className="py-4 px-6 font-medium whitespace-nowrap">{student.name}</td>
                                    <td className="py-4 px-6 whitespace-nowrap">{student.class}</td>
                                    <td className="py-4 px-6 text-right">
                                        <button className="text-red-600 hover:text-red-700 text-sm font-medium px-3 py-1 rounded hover:bg-red-50">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add Student Modal */}
            {showForm && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold mb-6">Add New Student</h2>

                            <input
                                type="text"
                                placeholder="Student ID (e.g. STD003)"
                                value={newStudent.studentId}
                                onChange={(e) => setNewStudent({ ...newStudent, studentId: e.target.value })}
                                className="w-full p-4 border border-gray-300 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-base"
                            />

                            <input
                                type="text"
                                placeholder="Student Full Name"
                                value={newStudent.name}
                                onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                                className="w-full p-4 border border-gray-300 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-base"
                            />

                            <select
                                value={newStudent.class}
                                onChange={(e) => setNewStudent({ ...newStudent, class: e.target.value })}
                                className="w-full p-4 border border-gray-300 rounded-xl mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-base"
                            >
                                <option value="">Select Class</option>
                                {classes.map((cls) => (
                                    <option key={cls} value={cls}>{cls}</option>
                                ))}
                            </select>

                            <div className="flex gap-3">
                                <button
                                    onClick={() => setShowForm(false)}
                                    className="flex-1 py-4 border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-100"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleAddStudent}
                                    className="flex-1 py-4 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700"
                                >
                                    Save Student
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
