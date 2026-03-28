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
        // Just UI - no real add
        setShowForm(false);
        setNewStudent({ name: "", class: "", studentId: "" });
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">Students</h1>
                <button
                    onClick={() => setShowForm(true)}
                    className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 font-medium"
                >
                    + Add Student
                </button>
            </div>

            <div className="bg-white rounded-xl shadow overflow-hidden">
                <table className="w-full">
                    <thead>
                        <tr className="border-b bg-gray-50">
                            <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase">Student ID</th>
                            <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                            <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase">Class</th>
                            <th className="py-4 px-6 text-right text-xs font-medium text-gray-500 uppercase">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id} className="border-b hover:bg-gray-50">
                                <td className="py-4 px-6">{student.studentId}</td>
                                <td className="py-4 px-6 font-medium">{student.name}</td>
                                <td className="py-4 px-6">{student.class}</td>
                                <td className="py-4 px-6 text-right">
                                    <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Add Student Form Modal */}
            {showForm && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
                        <h2 className="text-xl font-semibold mb-6">Add New Student</h2>

                        <input
                            type="text"
                            placeholder="Student ID"
                            value={newStudent.studentId}
                            onChange={(e) => setNewStudent({ ...newStudent, studentId: e.target.value })}
                            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-indigo-500"
                        />

                        <input
                            type="text"
                            placeholder="Student Name"
                            value={newStudent.name}
                            onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-indigo-500"
                        />

                        <select
                            value={newStudent.class}
                            onChange={(e) => setNewStudent({ ...newStudent, class: e.target.value })}
                            className="w-full p-3 border border-gray-300 rounded-lg mb-6 focus:ring-2 focus:ring-indigo-500"
                        >
                            <option value="">Select Class</option>
                            {classes.map((cls) => (
                                <option key={cls} value={cls}>{cls}</option>
                            ))}
                        </select>

                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowForm(false)}
                                className="flex-1 py-3 border border-gray-300 rounded-lg font-medium"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleAddStudent}
                                className="flex-1 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700"
                            >
                                Save Student
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}