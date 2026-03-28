import { useState } from 'react';

export default function Settings() {
    const [schoolName, setSchoolName] = useState("Bright Future Academy");
    const [classes, setClasses] = useState(["JSS1", "JSS2", "SS1"]);
    const [newClass, setNewClass] = useState("");
    const [teacher, setTeacher] = useState({
        name: "Mr. Ade",
        email: "teacher@email.com",
    });

    const handleAddClass = () => {
        if (!newClass.trim()) return;
        setClasses([...classes, newClass.trim()]);
        setNewClass("");
    };

    const handleDeleteClass = (index) => {
        setClasses(classes.filter((_, i) => i !== index));
    };

    return (
        <div className="space-y-8">
            <h1 className="text-2xl font-bold text-gray-900">Settings</h1>

            {/* School Settings */}
            <div className="bg-white rounded-xl shadow p-6 max-w-xl">
                <h2 className="text-lg font-semibold mb-6">School Settings</h2>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">School Name</label>
                    <input
                        type="text"
                        value={schoolName}
                        onChange={(e) => setSchoolName(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Classes</label>
                    <div className="space-y-2 mb-4">
                        {classes.map((cls, index) => (
                            <div key={index} className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-lg">
                                <span className="font-medium">{cls}</span>
                                <button
                                    onClick={() => handleDeleteClass(index)}
                                    className="text-red-600 hover:text-red-700 text-sm font-medium"
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Add new class (e.g. JSS3)"
                            value={newClass}
                            onChange={(e) => setNewClass(e.target.value)}
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <button
                            onClick={handleAddClass}
                            className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700"
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div>

            {/* Teacher Profile */}
            <div className="bg-white rounded-xl shadow p-6 max-w-xl">
                <h2 className="text-lg font-semibold mb-6">Teacher Profile</h2>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                        type="text"
                        value={teacher.name}
                        onChange={(e) => setTeacher({ ...teacher, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                        type="email"
                        value={teacher.email}
                        onChange={(e) => setTeacher({ ...teacher, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <button className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700">
                    Save Changes
                </button>
            </div>
        </div>
    );
}