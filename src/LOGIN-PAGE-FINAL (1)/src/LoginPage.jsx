import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex w-full max-w-4xl shadow-lg bg-white rounded-xl overflow-hidden">
        <div className="w-1/2 hidden md:block bg-gray-100 flex items-center justify-center">
          <img
            src="/login-image.png"
            alt="Login"
            className="w-3/4 h-auto object-contain"
          />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">SK2 workshop store</h2>
          <div className="flex flex-col gap-3 mb-4">
            <button className="flex items-center justify-center gap-2 border px-4 py-2 rounded hover:bg-gray-100">
              <FcGoogle className="text-xl" /> Đăng nhập bằng Google
            </button>
            <button className="flex items-center justify-center gap-2 border px-4 py-2 rounded hover:bg-gray-100 text-blue-600">
              <FaFacebook className="text-xl" /> Đăng nhập bằng Facebook
            </button>
          </div>
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-3 text-gray-400">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full border px-4 py-2 rounded focus:outline-blue-500"
            />
            <input
              type="password"
              placeholder="Mật khẩu"
              className="w-full border px-4 py-2 rounded focus:outline-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
            >
              Đăng nhập
            </button>
          </form>
          <div className="flex justify-between mt-4 text-sm">
            <a href="#" className="text-blue-600 hover:underline">Đăng ký ngay</a>
            <a href="#" className="text-blue-600 hover:underline">Quên mật khẩu?</a>
          </div>
          <p className="mt-6 text-center text-gray-400 text-xs">© SK2 workshop store</p>
        </div>
      </div>
    </div>
  )
}