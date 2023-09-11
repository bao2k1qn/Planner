/* eslint-disable @next/next/no-img-element */
import { Locale } from 'i18n-config';

import { getDictionary } from '@/lib/i18n';

import Svg from '~/next.svg';

export default async function HomePage({ params: { lang } }: { params: { lang: Locale } }) {
    const dictionary = await getDictionary(lang);

    return (
        <main>
            <section className="bg-white">
                <div className="layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center">
                    <h1 className="mt-4 font-primary font-extrabold peer">{dictionary['server-component'].welcome}</h1>
                    <p className="mt-2 text-lg text-gray-800 font-secondary font-bold peer-hover:text-primary-300 transition-colors duration-1000 ease-in-out delay-500">
                        {dictionary.counter.decrement}
                    </p>
                    <Svg />
                    <input
                        type="file"
                        className="block w-full text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-violet-700
                            hover:file:bg-violet-100"
                    />
                    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg shadow-primary-300/50 overflow-hidden md:max-w-2xl">
                        <div className="md:flex">
                            <div className="md:shrink-0">
                                <img
                                    className="h-48 w-full object-cover md:h-full md:w-48"
                                    src="https://images.unsplash.com/photo-1637734433731-621aca1c8cb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=404&q=80"
                                    alt="Modern building architecture"
                                />
                            </div>
                            <div className="p-8">
                                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                                    Company retreats
                                </div>
                                <a
                                    href="#"
                                    className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                                >
                                    Incredible accommodation for your team
                                </a>
                                <p className="mt-2 text-slate-500">
                                    Looking to take your team away on a retreat to enjoy awesome food and take in some
                                    sunshine? We have a list of places to do just that.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="text-5xl font-extrabold">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                            Hello world
                        </span>
                    </div>
                    <table className="table-auto">
                        <thead>
                            <tr>
                                <th>Song</th>
                                <th>Artist</th>
                                <th>Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                <td>Malcolm Lockyer</td>
                                <td>1961</td>
                            </tr>
                            <tr>
                                <td>Witchy Woman</td>
                                <td>The Eagles</td>
                                <td>1972</td>
                            </tr>
                            <tr>
                                <td>Shining Star</td>
                                <td>Earth, Wind, and Fire</td>
                                <td>1975</td>
                            </tr>
                        </tbody>
                    </table>

                    <footer className="absolute bottom-2 text-gray-700">© {new Date().getFullYear()} By </footer>
                </div>
            </section>
        </main>
    );
}
