// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import logo from "../assets/solacelogo.png";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const handleLogin = () => {
//     setError("");

//     // here is  Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       setError("Please enter a valid email address");
//       return;
//     }
//     const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
//     if (!specialCharRegex.test(password)) {
//       setError("Password must contain at least one special character");
//       return;
//     }
//     navigate("/dashboard");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#fdfdfe] px-4">
//       <div
//         className="
//           w-full max-w-[1100px]
//           h-[700px]
//           bg-white rounded-[28px]
//           shadow-xl overflow-hidden
//           grid grid-cols-1 md:grid-cols-2
//         "
//       >
//         <div className="flex flex-col justify-center px-6 md:px-16">
//           <h1 className="text-[28px] md:text-[32px] font-semibold text-[#1c1b1b] mb-2">
//             Welcome to Solace
//           </h1>
//           <p className="text-[15px] md:text-[16px] text-[#555555] mb-8 md:mb-10">
//             Sign in to your account
//           </p>
//           <input
//             type="email"
//             placeholder="Email address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="
//               w-full h-[48px] mb-5 px-6 rounded-full
//               border border-[#e0e0e0] bg-[#fafafa]
//               focus:outline-none focus:border-[#1f3d88]
//             "
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="
//               w-full h-[48px] mb-4 px-6 rounded-full
//               border border-[#e0e0e0] bg-[#fafafa]
//               focus:outline-none focus:border-[#1f3d88]
//             "
//           />
//           {error && (
//             <p className="text-[14px] text-[#e74c3c] mb-4">
//               {error}
//             </p>
//           )}
//           <div className="flex items-center justify-between mb-8">
//             <label className="flex items-center gap-2 text-[14px] text-[#555555]">
//               <input type="checkbox" className="accent-[#1f3d88]" />
//               Remember me
//             </label>
//             <span className="text-[14px] text-[#4277ff] cursor-pointer">
//               Forgot password?
//             </span>
//           </div>
//           <button
//             onClick={handleLogin}
//             className="
//               h-[48px] rounded-full bg-[#1f3d88]
//               text-white text-[16px] font-medium
//               hover:bg-[#1c367a] transition-colors
//             "
//           >
//             Login
//           </button>
//         </div>
//         <div className="hidden md:flex bg-[#0b1530] items-center justify-center">
//           <img src={logo} alt="Solace Logo" className="w-[180px]" />
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Login;




import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/image.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    setError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (!specialCharRegex.test(password)) {
      setError("Password must contain at least one special character");
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdfdfe] px-4">
      <div
        className="
          w-full max-w-[1200px]
          h-[700px]
          bg-white
          rounded-[28px]
          shadow-xl
          overflow-hidden
          grid grid-cols-1
          md:grid-cols-[1fr_1.2fr]
        "
      >
        {/* LEFT – FORM */}
        <div className="flex flex-col justify-center px-6 md:px-16">
         <div className="flex flex-col items-center text-center gap-2">
  <h1 className="text-[28px] md:text-[32px] font-bold text-[#1c1b1b]">
    Welcome to Solace
  </h1>

  <p className="text-[15px] md:text-[16px] text-[#555555] mb-10">
  Sign in to your account
</p>
</div>


          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              w-full h-[48px] mb-5 px-6 rounded-full
              border border-[#e0e0e0] bg-[#fafafa]
              focus:outline-none focus:border-[#1f3d88]
            "
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="
              w-full h-[48px] mb-4 px-6 rounded-full
              border border-[#e0e0e0] bg-[#fafafa]
              focus:outline-none focus:border-[#1f3d88]
            "
          />

          {error && (
            <p className="text-[14px] text-[#e74c3c] mb-4">
              {error}
            </p>
          )}

          <div className="flex items-center justify-between mb-8">
            <label className="flex items-center gap-2 text-[14px] text-[#555555]">
              <input type="checkbox" className="accent-[#1f3d88]" />
              Remember me
            </label>
            <span className="text-[14px] text-[#4277ff] cursor-pointer">
              Forgot password?
            </span>
          </div>

          <button
            onClick={handleLogin}
            className="
              h-[48px] rounded-full bg-[#1f3d88]
              text-white text-[16px] font-medium
              hover:bg-[#1c367a] transition-colors
            "
          >
            Login
          </button>
        </div>

        {/* RIGHT – IMAGE (WIDER) */}
        <div className="hidden md:flex items-center justify-center p-6">
          <div
            className="
              w-full h-full
              rounded-[22px]
              bg-cover bg-center bg-no-repeat
            "
            style={{
              backgroundImage: `url(${logo})`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
