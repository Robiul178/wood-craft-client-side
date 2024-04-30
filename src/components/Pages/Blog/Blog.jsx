

const Blog = () => {
    return (
        <div>
            <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl font-bold">Our Popular blogs</h2>
                        <p className="font-serif text-sm dark:text-gray-600">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                        <article className="flex flex-col dark:bg-gray-50">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://blog.woodpeckerscrafts.com/spring-floral-chandelier-with-woodpeckers-crafts/spring-floral-chandelier-11/" />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-default-600">Spring Floral Chandelier with Woodpeckers Crafts</a>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">I find so much inspiration for my crafting projects from flowers during Spring!</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                                    <span>June 1, 2020</span>
                                    <span>2.1K views</span>
                                </div>
                            </div>
                        </article>

                        <article className="flex flex-col dark:bg-gray-50">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://blog.woodpeckerscrafts.com/mackenzie-childs-style-easter-decor-with-woodpeckers-crafts/mackenzie-childs-style-10/" />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-default-600">Mackenzie-Childs-style Easter Decor with Woodpeckers Crafts</a>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug"> Today I have a really fun and whimsical DIY that is inspired entirely by Spring flowers. Instead of putting flowers in vases on the table this Spring, why not hang them as part of a beautiful chandelier?</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                                    <span>June 2, 2020</span>
                                    <span>2.2K views</span>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col dark:bg-gray-50">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://blog.woodpeckerscrafts.com/wooden-easter-bunny-2-ways/untitled-design-42/" />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-default-600">Wooden Easter Bunny 2 Ways</a>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Options are always fun, especially when you’re crafty and you have a preference! Enjoy these two </h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                                    <span>June 3, 2020</span>
                                    <span>2.3K views</span>
                                </div>
                            </div>
                        </article>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;