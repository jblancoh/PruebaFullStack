import FormLogin from "@/components/FormLogin";
import NavBar from "@/components/NavBar";
import Toast from "@/components/Toast";

const Page = () => {
  return (
    <div className="container">
      <div className="hero min-h-screen">
        <div className="border rounded-lg shadow-lg ">
        <div className="text-center hero-content flex-col">
          <FormLogin />
        </div>
        </div>
      </div>
      <Toast />
    </div>
  );
}

export default Page;