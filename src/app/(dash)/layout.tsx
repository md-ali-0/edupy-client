import Navbar from "@/components/Dashboard/Navbar";
import Sidebar from "@/components/Dashboard/Sidebar";
import Provider from "@/provider/Provider";
import SidebarProvider from "@/provider/SideBarContext";
import { Toaster } from "react-hot-toast";
import "../globals.css";

const DashboardLayout = ({
    children,
}: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html>
            <body>
                <Provider>
                    <SidebarProvider>
                        <div className="flex h-screen">
                            <Sidebar />
                            <div className="flex-1 flex flex-col overflow-hidden">
                                <Navbar />
                                <main className="flex-1 overflow-x-hidden overflow-y-auto">
                                    <div className="mx-auto max-w-screen-2xl px-4 md:px-6 2xl:px-10 py-2">
                                        {children}
                                    </div>
                                </main>
                            </div>
                        </div>
                    </SidebarProvider>
                </Provider>
                <Toaster/>
            </body>
        </html>
    );
};

export default DashboardLayout;
