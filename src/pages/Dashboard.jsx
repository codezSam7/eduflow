import { Users, BookOpen, Calendar, BarChart3, Clock } from 'lucide-react';

export default function Dashboard() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Good morning, Samuel</h1>
                <p className="text-gray-600 mt-1">Here's what's happening in your classes today</p>
            </div>

            {/* Stat Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    icon={<Calendar className="h-6 w-6 text-blue-600" />}
                    title="Classes Today"
                    value="4"
                    subtitle="Next: JSS 3 Math @ 11:00 AM"
                />
                <StatCard
                    icon={<Users className="h-6 w-6 text-green-600" />}
                    title="Attendance Today"
                    value="87%"
                    subtitle="2 students absent"
                />
                <StatCard
                    icon={<BookOpen className="h-6 w-6 text-indigo-600" />}
                    title="Pending Submissions"
                    value="12"
                    subtitle="Due today"
                />
                <StatCard
                    icon={<BarChart3 className="h-6 w-6 text-purple-600" />}
                    title="Average Score"
                    value="76%"
                    subtitle="↑ 4% this week"
                />
            </div>

            <div className="bg-white rounded-xl shadow p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <QuickButton
                        label="Mark Attendance"
                        icon={Calendar}
                        color="bg-green-100 hover:bg-green-200 text-green-800"
                    />
                    <QuickButton
                        label="Create Assignment"
                        icon={BookOpen}
                        color="bg-indigo-100 hover:bg-indigo-200 text-indigo-800"
                    />
                    <QuickButton
                        label="View Timetable"
                        icon={Clock}
                        color="bg-blue-100 hover:bg-blue-200 text-blue-800"
                    />
                    <QuickButton
                        label="Check Messages"
                        icon={Users}
                        color="bg-yellow-100 hover:bg-yellow-200 text-yellow-800"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow p-6">
                    <h3 className="text-lg font-semibold mb-4">Upcoming Deadlines</h3>
                    <ul className="space-y-3">
                        <li className="flex justify-between text-sm">
                            <span>English Essay Submission</span>
                            <span className="text-red-600">Tomorrow</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-white rounded-xl shadow p-6">
                    <h3 className="text-lg font-semibold mb-4">Recent Grades Entered</h3>
                    <ul className="space-y-3">
                        <li className="flex justify-between text-sm">
                            <span>JSS 3 Math Quiz</span>
                            <span className="text-green-600">Avg: 82%</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

function StatCard({ icon, title, value, subtitle }) {
    return (
        <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-600">{title}</p>
                    <p className="text-2xl font-bold mt-1">{value}</p>
                    <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
                </div>
                <div className="p-3 rounded-lg">{icon}</div>
            </div>
        </div>
    );
}

function QuickButton({ label, icon: Icon, color }) {
    return (
        <button className={`flex flex-col items-center justify-center p-4 rounded-lg ${color} transition`}>
            <Icon className="h-8 w-8 mb-2" />
            <span className="text-sm font-medium">{label}</span>
        </button>
    );
}