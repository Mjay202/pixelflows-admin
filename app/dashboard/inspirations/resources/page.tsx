"use client";

import ButtonWithIcon from "@/app/components/button-with-icon";
import LandingPageTable from "@/app/dashboard/inspirations/resources/landing-pages-table";
import Search from "@/app/components/search";
import { initFlowbite, initTabs } from "flowbite";

function ResourcesPage() {
  initTabs();
  return (
    <section>
      <h1 className="text-lg font-semibold">Resources</h1>
      <h5 className="text-sm font-normal mt-2">
        View and manage inspiration resources
      </h5>

      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="default-styled-tab"
          data-tabs-toggle="#default-styled-tab-content"
          // data-tabs-active-classes="text-purple-700 hover:text-purple-900 "
          // data-tabs-inactive-classes=" text-gray-500 hover:text-gray-600"
          role="tablist"
          // onMouseDown={initFlowbite}
        >
          <li className="me-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg font-normal"
              id="landing-pages-styled-tab"
              data-tabs-target="#styled-landing-pages"
              type="button"
              role="tab"
              onMouseDown={initTabs}
              aria-controls="landing-pages"
              aria-selected="true"
            >
              Landing Pages
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
              id="web-styled-tab"
              data-tabs-target="#styled-web"
              onMouseDown={initTabs}
              type="button"
              role="tab"
              aria-controls="web"
              aria-selected="false"
            >
              Web
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300"
              id="android-styled-tab"
              data-tabs-target="#styled-android"
              onMouseDown={initTabs}
              type="button"
              role="tab"
              aria-controls="android"
              aria-selected="false"
            >
              Android
            </button>
          </li>
          <li role="presentation">
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
              id="ios-styled-tab"
              data-tabs-target="#styled-ios"
              onMouseDown={initTabs}
              type="button"
              role="tab"
              aria-controls="ios"
              aria-selected="false"
            >
              IOS
            </button>
          </li>
        </ul>
      </div>
      <div id="default-styled-tab-content">
        <div
          className="hidden  rounded-lg"
          id="styled-landing-pages"
          role="tabpanel"
          aria-labelledby="landing-pages-tab"
        >
          <div className="flex justify-between items-center">
            <div>
              <Search placeholder="Search" />
            </div>
            <div className="">
              <ButtonWithIcon
                color="text-gray-900"
                bg="bg-gray-50"
                svg="/svg/sort.svg"
                text="Action"
              />
              <ButtonWithIcon
                color="text-gray-900"
                bg="bg-gray-50"
                svg="/svg/sort.svg"
                text="Sort"
              />
              <ButtonWithIcon
                color="text-white"
                bg="bg-purple-600"
                svg="/svg/plus.svg"
                text="Add Platforms"
              />
            </div>
          </div>
          <LandingPageTable />
        </div>
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="styled-web"
          role="tabpanel"
          aria-labelledby="web-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              web tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classNamees to control the
            content visibility and styling.
          </p>
        </div>
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="styled-android"
          role="tabpanel"
          aria-labelledby="android-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              android tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classNamees to control the
            content visibility and styling.
          </p>
        </div>
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="styled-ios"
          role="tabpanel"
          aria-labelledby="ios-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              ios tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classNamees to control the
            content visibility and styling.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ResourcesPage;
