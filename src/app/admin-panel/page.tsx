"use client";

import { ServiceModal } from "@/components/common/ServiceModal";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AuthenticatedRoute from "../AuthenticatedRoute ";


const Page = () => {
  const [services, setServices] = useState([]);
  const [serviceModal, setServiceModal] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    const servicesFromLS = localStorage.getItem("services");
    if (servicesFromLS) {
      setServices(JSON.parse(servicesFromLS));
    }
  }, []);

  const handleSignout = () => {
    const user: any = localStorage.getItem("user");
    const parsedUser = JSON.parse(user);
    localStorage.setItem(
      "user",
      JSON.stringify({
        email: parsedUser.email,
        password: parsedUser.password,
        isLoggedIn: false,
      })
    );
    router.push("/");
  };

  return (
    <AuthenticatedRoute>
      <div className="grid w-full m-auto">
        {serviceModal && (
          <ServiceModal
            serviceModal={serviceModal}
            setServiceModal={setServiceModal}
            services={services}
            setServices={setServices}
          />
        )}
        <div className="flex items-center py-6 justify-center gap-2">
          <div
            onClick={handleSignout}
            className="flex items-center gap-2 bg-white text-violet-800 p-3 rounded-md cursor-pointer"
          >
            Logout
          </div>
          <div className="flex items-center gap-2">
            <button
              className=" bg-violet-800 p-3 rounded-md"
              onClick={() => setServiceModal(true)}
            >
              Add new page
            </button>
            <a href="https://builder.io/content" target="_blank">
              <button className=" bg-violet-800 p-3 rounded-md">
                Edit With Builder Studio
              </button>
            </a>
          </div>
        </div>
        {/* {services.map((service: any, index: number) => (
          <Link className="text-center " href={service.href} key={index}>
            <button className="m-1">{service.title}</button>
          </Link>
        ))} */}
      </div>
    </AuthenticatedRoute>
  );
};

export default Page;
