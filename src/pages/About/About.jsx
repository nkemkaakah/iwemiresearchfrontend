import React from 'react'
import Navbar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import pic1 from '../../assets/research-logo.webp'
import pic2 from '../../assets/research-logo2.jpeg'
import pic3 from '../../assets/research-logo3.jpeg'
import Testimonial from '../../components/Testimonials/Testimonials'

const About = () => {
  return (
    <div className='about-container flex flex-col'>
        <Navbar />
        <div className='about flex flex-col '>

            {/**<div className='about-heading flex'>
                <h2>About us</h2>
            </div>**/}
            <div className='about-hero flex'>
                <div className='flex about-hero-img'>
                    <div className=' flex flex-col items-center about-hero-img-left'>
                        <img src={pic1} alt="" className='a'/>
                        <img src={pic2} alt="" className='b'/>
                    </div> 
                    <div className='about-hero-img-right'>
                        <img src={pic3} alt="" />
                    </div>                   
                    
                </div>
                <div className='about-hero-right'>
                    <span className='about-hero-right-h'>
                        Who we are
                    </span>
                    <h2 className='about-hero-right-sh'>
                        Lorem ipsum dolor sit amet-lorem ipsum dolor sit amet consectetur
                    </h2>
                    <p className='about-hero-right-t'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod neque, 
                        nemo error autem reiciendis odio a, ex quas libero dolorum molestiae sunt 
                        nostrum eius facere magnam atque repudiandae sapiente aut.
                    </p>
                    <ul className='about-hero-right-ul'>
                        <li>
                            Lorem ipsum
                        </li>
                        <li>
                            Sit amet consec
                        </li>
                        <li>
                            Porro deserunt
                        </li>
                        <li>
                            Commodi non 
                        </li>
                        
                    </ul>
                </div>
            </div>
            <hr />
            <div className='about-section flex flex-col items-center justify-center'>
                <div className='about-section-h'>
                    <h2>
                        Free access to thousands of global research papers, academic insights and journals
                    </h2>
                </div>
                <div className='about-section-t flex'>
                    <div className='each-t flex flex-col'>
                        <div className='num'>
                            <h1>01</h1>
                        </div>
                        <div className='subh'><h2>Our Vision</h2></div>
                        <div className='para'>
                            <p>
                            At Iwemi Research, our mission is to push the boundaries of knowledge
                             and foster innovation through comprehensive research and collaboration.
                            </p>
                        </div>
                    </div>
                    <div className='each-t flex flex-col'>
                        <div className='num'>
                            <h1>02</h1>
                        </div>
                        <div className='subh'><h2>Our Mission</h2></div>
                        <div className='para'>
                            <p>
                            We envision a world where access to cutting-edge research and groundbreaking discoveries is available to everyone,
                             fueling progress and advancement in every field.
                            </p>
                        </div>
                    </div>
                    <div className='each-t flex flex-col'>
                        <div className='num'>
                            <h1>03</h1>
                        </div>
                        <div className='subh'><h2>Our Team</h2></div>
                        <div className='para'>
                            <p>
                            Our team comprises dedicated researchers, scientists, and educators committed 
                            to making significant contributions to the global knowledge base.
                            </p>
                        </div>
                    </div>
                   
                    
                    
                </div>
            </div>
            <div className='about-testimonial'>
                <div className='testimonial-similar'>
                    <section className="bg-white dark:bg-gray-900 dark">
                        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                            <div className="mx-auto max-w-screen-sm">
                
                            <p className="mb-8  text-gray-500 lg:mb-16 sm:text-xl dark:text-black p ">
                            Discover what our users have to say about their experience with our collection of research papers, journals, and academic publications.
                            </p>
                            </div>
                            <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
                            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
                                <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Invaluable Resource for Research</h3>
                                <p className="my-4">"Accessing a vast collection of research papers and academic journals has never been easier. The platform is user-friendly and incredibly efficient."</p>
                                <p className="my-4">"The ability to find and reference relevant research has streamlined my workflow and enhanced the quality of my academic papers."</p>
                                <p className="my-4">"This resource is a must-have for any serious researcher or academician."</p>
                                </blockquote>
                                <figcaption className="flex justify-center items-center space-x-3">
                                <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile" />
                                <div className="space-y-0.5 font-medium dark:text-white text-left">
                                    <div> Dr. Alex Johnson</div>
                                    <div className="text-sm font-light text-gray-500 dark:text-gray-400">Proffessor</div>
                                </div>
                                </figcaption>
                            </figure>
                            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
                                <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Critical for Academic Success</h3>
                                <p className="my-4">"This platform provides a comprehensive collection of journals and papers that are critical for my research. It's an invaluable tool for any academician."</p>
                                <p className="my-4">"The extensive database and easy access to high-quality papers have significantly contributed to my academic success."</p>
                                </blockquote>
                                <figcaption className="flex justify-center items-center space-x-3">
                                <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile" />
                                <div className="space-y-0.5 font-medium dark:text-white text-left">
                                    <div>Tobi Oyewole</div>
                                    <div className="text-sm font-light text-gray-500 dark:text-gray-400">Researcher</div>
                                </div>
                                </figcaption>
                            </figure>
                            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
                                <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Enhances Research Efficiency</h3>
                                <p className="my-4">"This platform has greatly enhanced my research efficiency. The well-structured and accessible database allows me to find the information I need quickly."</p>
                                <p className="my-4">"It has become an essential part of my research toolkit, saving me countless hours of work."</p>
                                </blockquote>
                                <figcaption className="flex justify-center items-center space-x-3">
                                <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile" />
                                <div className="space-y-0.5 font-medium dark:text-white text-left">
                                    <div>Funmi Odowusi</div>
                                    <div className="text-sm font-light text-gray-500 dark:text-gray-400">Scientist</div>
                                </div>
                                </figcaption>
                            </figure>
                            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
                                <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Comprehensive and Reliable</h3>
                                <p className="my-4">"This platform offers a comprehensive and reliable collection of academic papers. It's an essential resource for anyone involved in research."</p>
                                <p className="my-4">"The ease of access to high-quality journals and papers has significantly improved my research process."</p>

                                </blockquote>
                                <figcaption className="flex justify-center items-center space-x-3">
                                <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile" />
                                <div className="space-y-0.5 font-medium dark:text-white text-left">
                                    <div>Dr. Sarah Williams</div>
                                    <div className="text-sm font-light text-gray-500 dark:text-gray-400">CTO</div>
                                </div>
                                </figcaption>
                            </figure>
                            </div>
                            
                        </div>
                    </section>
                </div>
            </div>
        </div>
        <div className='dark'>
            <Footer />
        </div>
        
    </div>
  )
}

export default About