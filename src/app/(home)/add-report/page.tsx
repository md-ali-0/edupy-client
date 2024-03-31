import Container from "@/components/Container/Container";
import { FC } from "react";

const AddReportPage: FC = () => {
    return (
        <div className="h-screen">
            <Container>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-10 my-16">
                    <div className="dark:bg-[#001d30] shadow-lg rounded-md px-6 py-8  text-center">
                        <div>
                            <h3 className="text-xl ">Hard Working Level</h3>
                            <a
                                className="underline"
                                href="/add-report/hard-working-level"
                            >
                                <span> Go here</span>
                            </a>
                        </div>
                    </div>
                    <div className="dark:bg-[#001d30] shadow-lg rounded-md px-6 py-8  text-center">
                        <div>
                            <h3 className="text-xl ">Humanity Level</h3>
                            <a
                                className="underline"
                                href="/add-report/humanity-level"
                            >
                                <span> Go here</span>
                            </a>
                        </div>
                    </div>
                    <div className="dark:bg-[#001d30] shadow-lg rounded-md px-6 py-8  text-center">
                        <div>
                            <h3 className="text-xl ">Honesty Level</h3>
                            <a
                                className="underline"
                                href="/add-report/honesty-level"
                            >
                                <span> Go here</span>
                            </a>
                        </div>
                    </div>
                    <div className="dark:bg-[#001d30] shadow-lg rounded-md px-6 py-8  text-center">
                        <div>
                            <h3 className="text-xl ">
                                Relationship with Parents
                            </h3>
                            <a
                                className="underline"
                                href="/add-report/relationship-with-parents"
                            >
                                <span> Go here</span>
                            </a>
                        </div>
                    </div>
                    <div className="dark:bg-[#001d30] shadow-lg rounded-md px-6 py-8  text-center">
                        <div>
                            <h3 className="text-xl ">Tree plantitaion</h3>
                            <a
                                className="underline"
                                href="/add-report/tree-plantation"
                            >
                                <span> Go here</span>
                            </a>
                        </div>
                    </div>
                    <div className="dark:bg-[#001d30] shadow-lg rounded-md px-6 py-8  text-center">
                        <div>
                            <h3 className="text-xl ">
                                Extra curricular activities
                            </h3>
                            <a
                                className="underline"
                                href="/add-report/extra-curricular-activities"
                            >
                                <span> Go here</span>
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AddReportPage;
