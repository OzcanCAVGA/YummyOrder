import React, { useState } from 'react'

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        // Burada giriş işlemini gerçekleştirebilirsiniz
        // Örneğin, kullanıcı adı ve şifre doğrulaması yapılabilir
        if (username === 'admin' && password === 'password') {
            // Başarılı giriş işlemi
            console.log('Başarılı giriş');
        } else {
            // Başarısız giriş işlemi
            setError('Kullanıcı adı veya şifre yanlış');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen ">
            <div className="container mx-auto max-w-80">
                <h2 className="text-2xl font-bold mb-4">Giriş Yap</h2>
                {error && <div className="text-red-500 mb-4">{error}</div>}
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block mb-2">Kullanıcı Adı</label>
                        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="border border-gray-400 rounded-md py-2 px-4 w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-2">Şifre</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border border-gray-400 rounded-md py-2 px-4 w-full" />
                    </div>
                    <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">Giriş Yap</button>
                </form>
            </div>
        </div>
    );
};


