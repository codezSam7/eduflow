import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }

        if (email === 'teacher@eduflow.com' && password === 'edusflow242') {  // demo credentials
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userName', 'Samuel');
            navigate('/dashboard', { replace: true });
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-indigo-50 to-blue-50 flex items-center justify-center p-4">
            <div className="w-full max-w-5xl flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-2xl bg-white">

                {/* Left: Branding */}
                <div className="w-full md:w-1/2 bg-linear-to-br from-indigo-600 to-blue-700 text-white flex flex-col justify-center items-center p-10 md:p-16 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25)_0%,transparent_60%)]" />
                    </div>

                    <div className="relative z-10 text-center">
                        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
                            EduFlow
                        </h1>
                        <p className="text-xl md:text-2xl font-light opacity-90 mb-6">
                            Manage your school smarter
                        </p>
                        <p className="text-base md:text-lg max-w-md mx-auto opacity-80">
                            Attendance • Assignments • Grades • Communication — all in one place for Nigerian schools.
                        </p>
                    </div>
                </div>

                {/* Right: Login Form */}
                <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12">
                    <div className="w-full max-w-md space-y-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
                            <p className="mt-2 text-gray-600">Sign in to your teacher account</p>
                        </div>

                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="relative">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email address
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                    <input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                        placeholder="teacher@school.edu.ng"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="relative">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                    Password
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                    <input
                                        id="password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="pl-10 pr-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                        placeholder="••••••••"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between text-sm">
                                <label className="flex items-center text-gray-600">
                                    <input type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                    <span className="ml-2">Remember me</span>
                                </label>
                                <a href="#" className="text-indigo-600 hover:text-indigo-500 font-medium">
                                    Forgot password?
                                </a>
                            </div>

                            <button
                                onClick={handleSubmit}
                                type="submit"
                                className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200 transform hover:scale-[1.02]"
                            >
                                Sign in
                            </button>
                        </form>

                        <p className="text-center text-sm text-gray-600">
                            Don't have an account?{' '}
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Contact your school admin
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}