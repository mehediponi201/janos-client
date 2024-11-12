
const ApplicationForm = () => {
    return (
        <div className="mt-10">
            <form className="p-5 max-w-lg mx-auto space-y-4 bg-white shadow-lg rounded">
                {/* Position */}
                <div>
                    <label className="block font-semibold text-brown-600" htmlFor="position">
                        Position
                    </label>
                    <select
                        id="position"
                        name="position"
                        className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                    >
                        <option>Please Select</option>
                        {/* Add additional options as needed */}
                        <option value="position1">Junior Software Developper</option>
                        <option value="position2">Project Manager</option>
                    </select>
                </div>

                {/* Name */}
                <div>
                    <label className="block font-semibold text-brown-600" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter Your Full Name"
                        className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block font-semibold text-brown-600" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter Your E-Mail"
                        className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                    />
                </div>

                {/* Phone */}
                <div>
                    <label className="block font-semibold text-brown-600" htmlFor="phone">
                        Phone
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Enter Your Phone Number"
                        className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                    />
                </div>

                {/* Address */}
                <div>
                    <label className="block font-semibold text-brown-600" htmlFor="address">
                        Address
                    </label>
                    <textarea
                        id="address"
                        name="address"
                        placeholder="Please Enter Your Full Address"
                        className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                        rows="3"
                    ></textarea>
                </div>

                {/* Last Education */}
                <div>
                    <label className="block font-semibold text-brown-600" htmlFor="lastEducation">
                        Last Education
                    </label>
                    <input
                        type="text"
                        id="lastEducation"
                        name="lastEducation"
                        placeholder="Enter Your Last Education Level"
                        className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                    />
                </div>

                {/* Major */}
                <div>
                    <label className="block font-semibold text-brown-600" htmlFor="major">
                        Major
                    </label>
                    <input
                        type="text"
                        id="major"
                        name="major"
                        placeholder="Enter Your Major Subject"
                        className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                    />
                </div>

                {/* Photo */}
                <div>
                    <label className="block font-semibold text-brown-600" htmlFor="photo">
                        Photo
                    </label>
                    <input
                        type="file"
                        id="photo"
                        name="photo"
                        className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                    />
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-3 hover:bg-blue-700"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ApplicationForm;