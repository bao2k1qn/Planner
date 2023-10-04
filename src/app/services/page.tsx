import React from 'react';

import SideBarDrawerToggleButton from '@/components/servicesSideBar/SideBarDrawerToggleButton';
const data = `
<h1>The TinyMCE Cloud demo</h1>
<p><img style="display: block; margin-left: auto; margin-right: auto;" title="Tiny Logo" src="https://www.tiny.cloud/docs/images/logos/android-chrome-256x256.png" alt="TinyMCE Logo" width="128" height="128"></p>
<h2 style="text-align: center;" id="1">Welcome to the TinyMCE Cloud demo!</h2>
<p>Please try out the features provided in this full featured example (excluding <a href="https://www.tiny.cloud/tinymce/features/">Premium Plugins</a> ).</p>

<h2 id="2">Got questions or need help? </h2>
<ul>
  <li>Our <a class="mceNonEditable" href="https://www.tiny.cloud/docs/tinymce/6/">documentation</a> is a great resource for learning how to configure TinyMCE.</li>
  <li>Have a specific question? Try the <a href="https://stackoverflow.com/questions/tagged/tinymce" target="_blank" rel="noopener"><code>tinymce</code> tag at Stack Overflow</a>.</li>
  <li>We also offer enterprise grade support as part of <a href="https://www.tiny.cloud/pricing">TinyMCE premium plans</a>.</li>
</ul>
<h2 id="3">A simple table to play with</h2>
<table style="border-collapse: collapse; width: 100%;" border="1">
  <thead>
    <tr>
      <th>Product</th>
      <th>Cost</th>
      <th>Really?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>TinyMCE Cloud</td>
      <td>Get started for free</td>
      <td>YES!</td>
    </tr>
    <tr>
      <td>Plupload</td>
      <td>Free</td>
      <td>YES!</td>
    </tr>
  </tbody>
</table>
<h2 id="4">Found a bug?</h2>
<h3 id="6">Found a bug 1?</h3>
<h3 id="7">Found a bug 2?</h3>
<p>If you think you have found a bug please create an issue on the <a href="https://github.com/tinymce/tinymce/issues">GitHub repo</a> to report it to the developers.</p>

<h2 id="5">Finally ...</h2>
<p>Don't forget to check out our other product <a href="http://www.plupload.com" target="_blank">Plupload</a>, your ultimate upload solution featuring HTML5 upload support.</p>
<p>Thanks for supporting TinyMCE! We hope it helps you and your users create great content.<br>All the best from the TinyMCE team.</p>
`;
const Serivces = () => {
    return (
        <div className="p-5 pl-64 pr-64 md:p-0">
            <div className="hidden md:flex w-full h-10 md:border-b md:border-slate-900/10 md:dark:border-slate-50/[0.06] items-center">
                <div className="hidden md:flex ">
                    <SideBarDrawerToggleButton />
                </div>
                <ol className="ml-4 text-sm leading-6 whitespace-nowrap min-w-0 flex">
                    <li className="flex items-center text-slate-400">
                        Getting started
                        <svg width="3" height="6" aria-hidden="true" className="mx-3 overflow-visible text-slate-400">
                            <path
                                d="M0 0L3 3L0 6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            ></path>
                        </svg>
                    </li>
                    <li className="font-semibold text-slate-900 truncate dark:text-slate-200">Installation</li>
                </ol>
            </div>
            <p className="my-3 leading-6 font-semibold text-primary-500 dark:text-primary-400">Installation</p>
            <div
                className=" prose dark:prose-invert max-w-none prose-h1:text-3xl prose-h1:font-bold"
                dangerouslySetInnerHTML={{ __html: data }}
            />
        </div>
    );
};

export default Serivces;
