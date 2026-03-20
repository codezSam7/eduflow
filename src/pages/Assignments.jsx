import { useState } from 'react';
import { PlusCircle, CheckCircle, XCircle, Edit, Search } from 'lucide-react';

export default function Assignments() {
    const [activeTab, setActiveTab] = useState('list'); // 'list' or 'view-submissions'
    const [selectedAssignment, setSelectedAssignment] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    // Mock data - your assignments
    const [assignments, setAssignments] = useState([
        {
            id: 1,
            title: 'Algebraic Expressions Quiz',
            className: 'JSS 3A - Mathematics',
            dueDate: '2026-03-25',
            description: 'Solve questions 1-10 from the textbook. Show all workings.',
            status: 'active',
            submissions: 28, // out of 35 students
            graded: 12,
        },
        {
            id: 2,
            title: 'Essay: My Favourite Nigerian Festival',
            className: 'JSS 2B - English',
            dueDate: '2026-03-28',
            description: 'Minimum 300 words. Include introduction, body and conclusion.',
            status: 'active',
            submissions: 19,
            graded: 5,
        },
        {
            id: 3,
            title: 'States of Matter Worksheet',
            className: 'SSS 1C - Basic Science',
            dueDate: '2026-03-20',
            description: 'Complete the diagram and short answers.',
            status: 'past',
            submissions: 32,
            graded: 32,
        },
    ]);

    // Mock students + submissions for the selected assignment
    const [submissions, setSubmissions] = useState([
        { studentId: 1, name: 'Aisha Mohammed', submitted: true, file: 'essay.pdf', grade: 18, maxGrade: 20, feedback: 'Good structure!' },
        { studentId: 2, name: 'Chukwu Emeka', submitted: true, file: 'quiz.docx', grade: 14, maxGrade: 20, feedback: '' },
        { studentId: 3, name: 'Fatima Bello', submitted: false, file: null, grade: null, maxGrade: 20, feedback: '' },
        { studentId: 4, name: 'Ibrahim Yusuf', submitted: true, file: 'worksheet.jpg', grade: null, maxGrade: 20, feedback: '' },
        // ... more in real app
    ]);

    const filteredAssignments = assignments.filter(a =>
        a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        a.className.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleCreateAssignment = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newAssignment = {
            id: assignments.length + 1,
            title: formData.get('title'),
            className: formData.get('className'),
            dueDate: formData.get('dueDate'),
            description: formData.get('description'),
            status: 'active',
            submissions: 0,
            graded: 0,
        };
        setAssignments([...assignments, newAssignment]);
        setActiveTab('list');
        // Later: send to backend
    };

    const updateGrade = (studentId, grade) => {
        setSubmissions(submissions.map(s =>
            s.studentId === studentId ? { ...s, grade: parseInt(grade) || null } : s
        ));
    };

    const saveAllGrades = () => {
        alert('Grades saved successfully! (Mock)');
        // Later → API call
    };

    if (activeTab === 'create') {
        return (
            <div className="space-y-8">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Create New Assignment</h1>
                    <button
                        onClick={() => setActiveTab('list')}
                        className="text-indigo-600 hover:text-indigo-800 font-medium"
                    >
                        ← Back to list
                    </button>
                </div>

                <form onSubmit={handleCreateAssignment} className="bg-white rounded-xl shadow p-8 space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Assignment Title
                        </label>
                        <input
                            name="title"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="e.g. Quadratic Equations Homework"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Class / Subject
                        </label>
                        <select
                            name="className"
                            required
                            className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                        >
                            <option>JSS 3A - Mathematics</option>
                            <option>JSS 2B - English</option>
                            <option>SSS 1C - Physics</option>
                            {/* Add more */}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Due Date
                        </label>
                        <input
                            type="date"
                            name="dueDate"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Instructions / Description
                        </label>
                        <textarea
                            name="description"
                            rows={6}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Detailed instructions, questions, or what to submit..."
                        />
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full md:w-auto px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition shadow-md"
                        >
                            Create Assignment
                        </button>
                    </div>
                </form>
            </div>
        );
    }

    if (activeTab === 'view-submissions' && selectedAssignment) {
        const submittedCount = submissions.filter(s => s.submitted).length;
        const gradedCount = submissions.filter(s => s.grade !== null).length;

        return (
            <div className="space-y-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">{selectedAssignment.title}</h1>
                        <p className="text-gray-600 mt-1">{selectedAssignment.className} • Due: {selectedAssignment.dueDate}</p>
                    </div>
                    <button
                        onClick={() => setActiveTab('list')}
                        className="text-indigo-600 hover:text-indigo-800 font-medium"
                    >
                        ← Back to assignments
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl shadow p-6">
                        <p className="text-sm text-gray-600">Total Students</p>
                        <p className="text-3xl font-bold mt-1">{submissions.length}</p>
                    </div>
                    <div className="bg-white rounded-xl shadow p-6">
                        <p className="text-sm text-gray-600">Submitted</p>
                        <p className="text-3xl font-bold mt-1 text-green-600">{submittedCount}</p>
                    </div>
                    <div className="bg-white rounded-xl shadow p-6">
                        <p className="text-sm text-gray-600">Graded</p>
                        <p className="text-3xl font-bold mt-1 text-indigo-600">{gradedCount}</p>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                        <h3 className="text-lg font-semibold">Student Submissions</h3>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Student</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Submitted</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Grade</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Feedback</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {submissions.map((sub) => (
                                    <tr key={sub.studentId} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {sub.name}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {sub.submitted ? (
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                    <CheckCircle className="w-4 h-4 mr-1" /> Yes
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                                    <XCircle className="w-4 h-4 mr-1" /> No
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {sub.submitted ? (
                                                <input
                                                    type="number"
                                                    min="0"
                                                    max={sub.maxGrade}
                                                    value={sub.grade ?? ''}
                                                    onChange={(e) => updateGrade(sub.studentId, e.target.value)}
                                                    className="w-20 px-2 py-1 border border-gray-300 rounded text-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                    placeholder="-"
                                                />
                                            ) : '-'}
                                            {sub.submitted && <span className="ml-1 text-gray-500">/ {sub.maxGrade}</span>}
                                        </td>
                                        <td className="px-6 py-4">
                                            {sub.submitted && (
                                                <input
                                                    type="text"
                                                    value={sub.feedback}
                                                    onChange={(e) => {
                                                        // For MVP we skip live feedback update - can add later
                                                    }}
                                                    className="w-full px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                    placeholder="Enter feedback..."
                                                />
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="p-6 border-t flex justify-end">
                        <button
                            onClick={saveAllGrades}
                            className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition shadow-md"
                        >
                            Save All Grades
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Default: List view
    return (
        <div className="space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Assignments</h1>
                <button
                    onClick={() => setActiveTab('create')}
                    className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition shadow-md"
                >
                    <PlusCircle size={20} />
                    Create New Assignment
                </button>
            </div>

            <div className="bg-white rounded-xl shadow overflow-hidden">
                <div className="p-6 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="relative w-full sm:w-72">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <input
                            type="text"
                            placeholder="Search assignments..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Class</th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Due Date</th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Submissions</th>
                                <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {filteredAssignments.map((assignment) => (
                                <tr key={assignment.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">{assignment.title}</div>
                                        <div className="text-sm text-gray-500">{assignment.status === 'active' ? 'Active' : 'Past'}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                        {assignment.className}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                        {assignment.dueDate}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="text-sm">
                                            {assignment.submissions} / ? • {assignment.graded} graded
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button
                                            onClick={() => {
                                                setSelectedAssignment(assignment);
                                                setActiveTab('view-submissions');
                                            }}
                                            className="text-indigo-600 hover:text-indigo-900 mr-3"
                                        >
                                            View
                                        </button>
                                        <button className="text-gray-600 hover:text-gray-900">
                                            <Edit size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {filteredAssignments.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="px-6 py-10 text-center text-gray-500">
                                        No assignments found. Create one to get started!
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}