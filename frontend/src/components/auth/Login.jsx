import React, { useEffect, useState } from "react";
import Navbar from "../Landing page/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";
import image from "../../assets/images.jpg";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });
  const { loading, user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="flex h-screen">
      <div
        className="w-1/2 h-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute top-0 left-6 right-0 text-white pt-4">
                <div className="mb-4 ">
            <Link to="/">
              {" "}
              <h1 className={` font-bold  text-4xl`}>
                Job<span className="text-[#F83002]">Portal</span>
              </h1>
            </Link>
          </div>{" "}</div>
        <div className="absolute bottom-10 left-0 right-0  text-white p-4">
                    <h2 className="text-4xl font-bold line-clamp-6 ">Get ready to let your <span className="text-[#E88073]"> Journey Begin!</span></h2>
                    <ul className=" text-xl mt-2 my-4 font-medium leading-10">
                        <li>✅ Access a wide range of job listings.</li>
                        <li>✅ Connect with recruiters easily.</li>
                        <li>✅ Receive personalized job recommendations.</li>
                        <li>✅ Gain insights into company reviews.</li>
                        <li>✅ Track your application status effortlessly.</li>
                    </ul>
                
            </div>
        </div>        
      <div className="w-1/2 flex items-center justify-center">
        <form
          onSubmit={submitHandler}
          className="border border-gray-200 bg-white shadow-xl rounded-md p-6 w-full max-w-lg"
        >
          {/* <div className="mb-4 text-center">
          <Link to="/">  <h1 className={`text-2xl font-bold `}>
              Job<span className="text-[#F83002]">Portal</span>
            </h1></Link>
          </div> */}
          <h1 className="font-bold text-xl mb-5">Login</h1>
          <div className="my-2">
            <Label>Email</Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="Enter your email"
            />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Applicant</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          {loading ? (
            <Button className="w-full my-4">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
            </Button>
          ) : (
            <Button type="submit" className="w-full my-4">
              Login
            </Button>
          )}
          <span className="text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600">
              Signup
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
