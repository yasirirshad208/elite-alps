export default function TermsAndConditions() {
    return (
        <>
            <section>
                <div
                    className="sm:px-0 px-4 relative w-full h-[400px] bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('about.jpg')" }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 z-0"></div>

                    {/* Content */}
                    <div className="flex items-center flex-col gap-3 justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10">
                        <div className="text-[20px] sm:text-[28px] md:text-[36px] lg:text-[48px] xl:text-[56px] font-[600] !text-white text-center leading-[120%] max-w-[750px]">
                            Terms & Conditions
                        </div>

                        <div className="text-center font-[400] font-medium text-white">Last updated on: 23 September</div>
                    </div>
                </div>
            </section>

            <section className="my-[80px] md:my-[60px] my-[40px]">
                <div className="container flex flex-col gap-[30px]">

                    <div>
                        <h1 className="md:text-[32px] sm:text-[26px] text-[20px] text-[#121212] font-[600] mb-[19px]">Introduction</h1>
                        <p className="font-medium text-[#666D80]">
                            Welcome to Elite! These Terms and Conditions govern your use of our website, services, and bookings related to travel, accommodation, and experiences. By using our platform, you agree to comply with these terms. Please read them carefully before using our services.
                        </p>
                    </div>

                    <div>
                        <h1 className="md:text-[32px] sm:text-[26px] text-[20px] text-[#121212] font-[600] mb-[19px]">Use of Our Services</h1>
                        <ul className="list-disc pl-5 marker:text-[#666D80] text-[#666D80] font-medium space-y-2">
                            <li>You must be at least 18 years old to use our services.</li>
                            <li>You agree to provide accurate and complete information when creating an account or making a booking.</li>
                            <li>You are responsible for maintaining the confidentiality of your account details and passwords.</li>
                        </ul>
                    </div>

                    <div>
                        <h1 className="md:text-[32px] sm:text-[26px] text-[20px] text-[#121212] font-[600] mb-[19px]">Bookings and Payments</h1>
                        <ul className="list-disc pl-5 marker:text-[#666D80] text-[#666D80] font-medium space-y-2">
                            <li>All bookings are subject to availability and confirmation.</li>
                            <li>Payments must be made through authorized methods on our platform.</li>
                            <li>In case of cancellation or modification, our refund and cancellation policy will apply.</li>
                        </ul>
                    </div>

                    <div>
                        <h1 className="md:text-[32px] sm:text-[26px] text-[20px] text-[#121212] font-[600] mb-[19px]">User Responsibilities</h1>
                        <p className="font-medium text-[#666D80]">
                            You agree not to misuse our website or services, including engaging in fraudulent activity, transmitting harmful content, or violating any applicable laws and regulations.
                        </p>
                    </div>

                    <div>
                        <h1 className="md:text-[32px] sm:text-[26px] text-[20px] text-[#121212] font-[600] mb-[19px]">Intellectual Property</h1>
                        <p className="font-medium text-[#666D80]">
                            All content on this website, including text, graphics, logos, images, and software, is the property of Elite or its licensors. You may not reproduce, distribute, or modify any part of our website without written permission.
                        </p>
                    </div>

                    <div>
                        <h1 className="md:text-[32px] sm:text-[26px] text-[20px] text-[#121212] font-[600] mb-[19px]">Limitation of Liability</h1>
                        <p className="font-medium text-[#666D80]">
                            Elite is not responsible for any indirect, incidental, or consequential damages arising from the use of our website or services. We make no guarantees regarding the accuracy or completeness of information provided by third-party vendors or service providers.
                        </p>
                    </div>

                    <div>
                        <h1 className="md:text-[32px] sm:text-[26px] text-[20px] text-[#121212] font-[600] mb-[19px]">Third-Party Links</h1>
                        <p className="font-medium text-[#666D80]">
                            Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of these websites. You access them at your own risk.
                        </p>
                    </div>

                    <div>
                        <h1 className="md:text-[32px] sm:text-[26px] text-[20px] text-[#121212] font-[600] mb-[19px]">Changes to Terms</h1>
                        <p className="font-medium text-[#666D80]">
                            We may update or modify these Terms and Conditions at any time. Updates will be posted on this page with the revised effective date. Continued use of our services after changes implies your acceptance of the updated terms.
                        </p>
                    </div>

                    <div>
                        <h1 className="md:text-[32px] sm:text-[26px] text-[20px] text-[#121212] font-[600] mb-[19px]">Contact Us</h1>
                        <p className="font-medium text-[#666D80]">
                            For questions about these Terms and Conditions, please contact us at{" "}
                            <a href="mailto:elite@chalte.com" className="underline text-[#0074ec]">
                                elite@chalte.com
                            </a>.
                        </p>
                    </div>

                </div>
            </section>
        </>
    )


}