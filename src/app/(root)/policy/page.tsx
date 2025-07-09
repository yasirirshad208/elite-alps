export default function Policy() {
    return (
        <>
            <section >
                <div
                    className="sm:px-0 px-4 relative w-full h-[400px] bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url("about.jpg")` }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 z-0"></div>

                    {/* Content */}
                    <div className="flex items-center flex-col gap-3 justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10">
                        <div className="text-[20px] sm:text-[28px] md:text-[36px] lg:text-[48px] xl:text-[56px] font-[600] !text-white text-center leading-[120%] max-w-[750px]">
                            Privacy & Policy
                        </div>

                        <div className="text-center font-[400] font-medium text-white">Last updated on: 23 September</div>
                    </div>
                </div>
            </section>

            <section className="my-[80px] md:my-[60px] my-[40px]">
                <div className="container flex flex-col gap-[30px]">

                    <div>
                        <h1 className="heading-h1 font-[600] mb-[19px]">Privacy Policy</h1>
                        <p className="font-medium text-[#666D80]">
                            Welcome to Elite! This privacy policy outlines how we collect, use, and protect your personal information when you visit our website and use our services, including travel, accommodation, chalet booking, and experiences.
                        </p>
                    </div>

                    <div>
                        <h1 className="heading-h1 font-[600] mb-[19px]">Information We Collect</h1>
                        <ul className="list-disc pl-5 marker:text-[#666D80] text-[#666D80] font-medium space-y-2">
                            <li>
                                <span className="font-medium">Personal Information:</span> When you create an account or make a booking, we collect personal information such as your name, email address, phone number, and payment details.
                            </li>
                            <li>
                                <span className="font-medium">Booking Information:</span> Details about your travel plans, accommodation preferences, and experiences booked through our platform.
                            </li>
                            <li>
                                <span className="font-medium">Technical Information:</span> Information about your device, IP address, browser type, and usage data to improve our services and ensure site security.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h1 className="heading-h1 font-[600] mb-[19px]">How We Use Your Information</h1>
                        <ul className="list-disc pl-5 marker:text-[#666D80] text-[#666D80] font-medium space-y-2">
                            <li>
                                <span className="font-medium">To Provide Services:</span> We use your personal and booking information to process your reservations, payments, and to communicate with you about your bookings.
                            </li>
                            <li>
                                <span className="font-medium">Customer Support:</span> Your information helps us provide assistance and support when you need it.
                            </li>
                            <li>
                                <span className="font-medium">Marketing:</span> With your consent, we may use your email address to send promotional offers and updates about our services. You can opt-out at any time.
                            </li>
                            <li>
                                <span className="font-medium">Improving Our Services:</span> Technical information is used to enhance user experience, develop new features, and protect against fraud.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h1 className="heading-h1 font-[600] mb-[19px]">Data Sharing and Disclosure</h1>
                        <ul className="list-disc pl-5 marker:text-[#666D80] text-[#666D80] font-medium space-y-2">
                            <li>
                                <span className="font-medium">Service Providers:</span> We may share your information with trusted third-party service providers who assist us in delivering our services.
                            </li>
                            <li>
                                <span className="font-medium">Legal Requirements:</span> We may disclose your information if required by law or to protect our rights and safety.
                            </li>
                            <li>
                                <span className="font-medium">Business Transfers:</span> In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h1 className="heading-h1 font-[600] mb-[19px]">Data Security</h1>
                        <p className="font-medium text-[#666D80]">
                            We take appropriate measures to protect your personal information against unauthorized access, alteration, or destruction. This includes implementing encryption, firewalls, and secure server protocols.
                        </p>
                    </div>

                    <div>
                        <h1 className="heading-h1 font-[600] mb-[19px]">Cookies and Tracking Technologies</h1>
                        <p className="font-medium text-[#666D80]">
                            We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can manage your cookie preferences through your browser settings.
                        </p>
                    </div>

                    <div>
                        <h1 className="heading-h1 font-[600] mb-[19px]">Changes to This Privacy Policy</h1>
                        <p className="font-medium text-[#666D80]">
                            We may update this privacy policy periodically to reflect changes in our practices or legal requirements. The updated policy will be posted on our website with the effective date.
                        </p>
                    </div>

                    <div>
                        <h1 className="heading-h1 font-[600] mb-[19px]">Contact Us</h1>
                        <p className="font-medium text-[#666D80]">
                            If you have any questions or concerns about this privacy policy, please contact us at <a href="mailto:elite@chalte.com" className="underline text-[#0074ec]">elite@chalte.com</a>
                        </p>
                    </div>

                </div>
            </section>


        </>
    )
}