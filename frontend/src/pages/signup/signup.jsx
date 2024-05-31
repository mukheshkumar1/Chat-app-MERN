import GenderCheckbox from "./GenderCheckbox"

const SignUp = () => {
  return (
    <div className="flex flex-co1 item-center justify-center min-w- 96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className="text-3xl font-semibold text-center text-gray-300">
             
                SignUp
                <span className="text-blue-500">Chat App</span>
            </h1>
        <form>
          
          <label className="label p-2">
            <span className="text-base label-text">Full Name</span>
          </label>
          <input type="text" placeholder="Enter Full Name" className="w-full input input-bordered h-10"/>
          <div>
          <label className="label p-2">
            <span className="text-base label-text">User Name</span>

          </label>
          <input type="text" placeholder="Enter User Name" className="w-full input input-bordered h-10"/>
        </div>
        <div>
          <label className="label p-2">
            <span className="text-base label-text">Email</span>

          </label>
          <input type="email" placeholder="Enter Email" className="w-full input input-bordered h-10"/>
        </div>
          <div>
          <label className="label p-2">
            <span className="text-base label-text">Password</span>

          </label>
          <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10"/>
        </div>
        <div>
          <label className="label p-2">
            <span className="text-base label-text">confirm Password</span>

          </label>
          <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-10"/>
        </div>
        <GenderCheckbox/>
        <div>
        <label className="label p-2">
          
          <div>
            <button className="text-white bg-blue-700 hover:bg-green-800 btn btn-block btn-sm mt-2 ">SignUp</button>

          </div>
          </label>
          <a href="#" className="text-sm hover:underline hover:text-blue-400 mt-2 inline-block">
            {"Already"} Have an Account
          </a>
        </div>
          
           </form>
        </div>
        
     
      
    </div>
   
  )
}

export default SignUp
