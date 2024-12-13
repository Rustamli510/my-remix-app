import { Form, redirect, useActionData } from "@remix-run/react";

export const action = async ({ request }) => {
    const formData = await request.formData();
    const userData = {
        name: formData.get("name"),
        email: formData.get("email"),
    };

    const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    return redirect('/');
};

export default function FormPage() {
    const actionData = useActionData();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
                    Submit Your Details
                </h1>
                {actionData?.error && (
                    <p className="text-red-500 mb-4 text-center">
                        {actionData.error}
                    </p>
                )}
                <Form method="post" className="flex flex-col gap-6">
                    <div>
                        <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                            Name:
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                            Email:
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md text-lg font-medium hover:bg-blue-600 transition duration-200"
                    >
                        Submit
                    </button>
                </Form>
            </div>
        </div>
    );
}
