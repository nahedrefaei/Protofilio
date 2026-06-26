import React from 'react'; // Added for completeness
import { Container } from "@mui/material";
import "../Navbar/Navbar.css"; // Make sure this path is correct
import DataObjectIcon from '@mui/icons-material/DataObject';

export default function Skills() {
    const programingskills = [
        { title: "Python", icon: <i className="fa-brands fa-python"></i> },
        { title: "JavaScript", icon: <i className="fa-brands fa-js"></i> },
        { title: "Java", icon: <i className="fa-brands fa-java"></i> },
        { title: "HTML", icon: <i className="fa-brands fa-html5"></i> },
        { title: "CSS", icon: <i className="fa-brands fa-css3"></i> },
        { title: "C++", icon: <i className="fa-solid fa-code"></i> },
        { title: "R", icon: <i className="fa-solid fa-code"></i> },
        { title: "SQL", icon: <i className="fa-solid fa-database"></i> }
    ];

    const dataskills = [
        { title: "Excel", icon: <i className="fa-regular fa-file-excel"></i> },
        { title: "Tableau", icon: <DataObjectIcon sx={{ fontSize: "50px" }} /> },
        { title: "PowerBI", icon: <i className="fa-regular fa-file-excel"></i> },
        { title: "Data Mining", icon: <DataObjectIcon sx={{ fontSize: "50px" }} /> },
        { title: "Data Analysis", icon: <i className="fa-regular fa-file-excel"></i> },
        { title: "Data Visualization", icon: <DataObjectIcon sx={{ fontSize: "50px" }} /> },
        { title: "Machine Learning", icon: <i className="fa-regular fa-file-excel"></i> },
        { title: "Data Science", icon: <DataObjectIcon sx={{ fontSize: "50px" }} /> },
        { title: "Deep Learning", icon: <i className="fa-regular fa-file-excel"></i> },
        { title: "Natural Language Processing", icon: <DataObjectIcon sx={{ fontSize: "50px" }} /> }
    ];

    const webdevskills = [
        { title: "React", icon: <i className="fa-brands fa-react"></i> },
        { title: "Bootstrap", icon: <i className="fa-brands fa-bootstrap"></i> },
        { title: "Docker", icon: <i className="fa-brands fa-docker"></i> },
        { title: "Git", icon: <i className="fa-brands fa-git-alt"></i> },
        { title: "MongoDB", icon: <i className="fa-solid fa-database"></i> },
        { title: "SQL Server", icon: <i className="fa-solid fa-database"></i> }
    ];

    return (
        <div className="bg-slate-900 py-10" style={{ color: "cyan" }}> {/* Removed fixed height, added vertical padding */}
            <h1 className="text-4xl sm:text-5xl pt-10 mb-10 text-white text-center ">My Skills</h1>
            <Container maxWidth="lg"> {/* Using maxWidth for better control on large screens */}
                <section className="mb-16"> {/* Added section for semantic grouping and margin */}
                    <h2 className="text-3xl sm:text-4xl pt-10 mb-10 text-center text-cyan-400 pb-15">Programming Languages & Core CS</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> {/* Increased gap for better spacing */}
                        {programingskills.map((skill) => (
                            <div key={skill.title} className="p-4 rounded-3xl shadow-lg bg-slate-800/70 text-white flex flex-col items-center justify-center text-center h-40 transform transition duration-300 hover:scale-105 hover:bg-gradient-to-r from-purple-600 to-cyan-500 "> {/* Added hover effect */}
                                <div className="text-4xl sm:text-5xl mb-2 text-blue-400">
                                    {skill.icon}
                                </div>
                                <div className="text-lg sm:text-xl font-semibold">
                                    {skill.title}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl sm:text-4xl pt-10 mb-10 text-cyan-400 text-center pb-15">Data Science & Machine Learning</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {dataskills.map((skill) => (
                            <div key={skill.title} className="p-4 rounded-3xl shadow-lg bg-slate-800/70 text-white flex flex-col items-center justify-center text-center h-40 transform transition duration-300 hover:scale-105 hover:bg-gradient-to-r from-purple-600 to-cyan-500">
                                <div className="text-4xl sm:text-5xl mb-2 text-blue-400">
                                    {skill.icon}
                                </div>
                                <div className="text-lg sm:text-xl font-semibold">
                                    {skill.title}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="pb-10"> {/* Added padding bottom to the last section */}
                    <h2 className="text-3xl sm:text-4xl pt-10 mb-10 text-center text-cyan-400 pb-15">Web Development</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 hover:scale-105 ">
                        {webdevskills.map((skill) => (
                            <div key={skill.title} className="p-4 rounded-3xl shadow-lg bg-slate-800/70 text-white flex flex-col items-center justify-center text-center h-40 transform transition duration-300 hover:scale-105 hover:shadow-lg bg-purple-800 hover:bg-gradient-to-r from-purple-600 to-cyan-500">
                                <div className="text-4xl sm:text-5xl mb-2 text-blue-400 ">
                                    {skill.icon}
                                </div>
                                <div className="text-lg sm:text-xl font-semibold">
                                    {skill.title}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </Container>
        </div>
    );
}