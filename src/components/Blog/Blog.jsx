/** @format */

import React, { useRef } from "react";
import html2pdf from "html2pdf.js";

const Blog = () => {
    const pageRef = useRef();
    function handlePSave() {
        const options = {
            filename: "blog.pdf",
            html2canvas: { scale: 2 },
            jsPDF: { orientation: "landscape" },
        };

        html2pdf().set(options).from(pageRef.current).save();
    }

    return (
        <main className="mx-auto w-full max-w-screen-xl p-4 py-6">
            <div className="text-center mb-8">
                <button
                    onClick={handlePSave}
                    className="text-base border-2 px-3 py-2 rounded-md hover:bg-orange-500 duration-300 font-semibold">
                    Save as pdf
                </button>
            </div>
            <div ref={pageRef}>
                {
                    <section>
                        <h2 className='text-3xl font-extrabold mb-4'>Differences between uncontrolled and controlled components ?</h2>
                        <p className='text-gray-600'><span className='font-bold'>Ans:</span> Components that handle their own internal state independently of the parent component or external code are referred to as uncontrolled components. In light of this, the components status is not Rather of being controlled or managed by outside programming, a users actions are what determine behavior. Uncontrolled components are frequently used for straightforward forms or inputs, such a simple text input field. On the other hand, controlled components are those that rely on outside code to control their status. Instead of being managed internally by the component itself, the state of a controlled component is managed and controlled by the parent component or other external code. This gives the user more control over how the component behaves and may be especially helpful when dealing with complicated input fields or forms where external code has to modify and validate the components state.</p>

                        <h2 className='text-3xl font-extrabold my-4'>How to validate React props using PropTypes ?</h2>
                        <p className='text-gray-600'><span className='font-bold'>Ans:</span>React is a well-liked JavaScript toolkit for creating user interfaces, and its PropTypes functionality lets you verify the kinds of props that are supplied to a React component. In other words, PropTypes enables you to identify errors earlier by verifying that the appropriate data types are being given to your components.
</p>

                        <h2 className='text-3xl font-extrabold my-4'>Difference between nodejs and express js ?</h2>
                        <p className='text-gray-600'><span className='font-bold'>Ans:</span>A JavaScript runtime environment called Node.js is used to create network applications. The development of online applications is made easier by the use of Express.js, a web framework built on top of Node.js.</p>

                        <h2 className='text-3xl font-extrabold my-4'>What is a custom hook, and why will you create a custom hook ?</h2>
                        <p className='text-gray-600'><span className='font-bold'>Ans:</span>A reusable piece of code that may be used across several components that encapsulates functionality is known as a custom hook in the React programming language. Custom hooks can be used to reuse code across different components, simplify complicated logic, and abstract away implementation specifics. Reacts strong custom hooks feature makes it possible to create more modular and reusable code.
</p>
                    </section>
                }
            </div>
        </main>
    );
};

export default Blog;
