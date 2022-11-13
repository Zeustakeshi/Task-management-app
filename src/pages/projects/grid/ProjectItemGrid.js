import React, { useEffect, useState } from "react";
import IconDots from "../../../components/icons/IconDots";
import Image from "../../../components/Image";

const projects = [
    {
        title: "Working",
        datas: [
            {
                title: "Slack",
                desc: "These project will need a new brand identity where they will get recognies.",
                tags: ["Ios APP", "ANDROID"],
                members: [
                    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                ],
            },
            {
                title: "Slack",
                desc: "These project will need a new brand identity where they will get recognies.",
                tags: ["Ios APP", "ANDROID"],
                members: [
                    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                ],
            },
            {
                title: "Slack",
                desc: "These project will need a new brand identity where they will get recognies.",
                tags: ["Ios APP", "ANDROID"],
                members: [
                    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                ],
            },
        ],
    },
    {
        title: "In Progress",
        datas: [
            {
                title: "Slack",
                desc: "These project will need a new brand identity where they will get recognies.",
                tags: ["Ios APP", "ANDROID"],
                members: [
                    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                ],
            },
            {
                title: "Slack",
                desc: "These project will need a new brand identity where they will get recognies.",
                tags: ["Ios APP", "ANDROID"],
                members: [
                    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                ],
            },
            {
                title: "Slack",
                desc: "These project will need a new brand identity where they will get recognies.",
                tags: ["Ios APP", "ANDROID"],
                members: [
                    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                ],
            },
        ],
    },
    {
        title: "Complated",
        datas: [
            {
                title: "Slack",
                desc: "These project will need a new brand identity where they will get recognies.",
                tags: ["Ios APP", "ANDROID"],
                members: [
                    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                ],
            },
            {
                title: "Slack",
                desc: "These project will need a new brand identity where they will get recognies.",
                tags: ["Ios APP", "ANDROID"],
                members: [
                    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                ],
            },
            {
                title: "Slack",
                desc: "These project will need a new brand identity where they will get recognies.",
                tags: ["Ios APP", "ANDROID"],
                members: [
                    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                ],
            },
        ],
    },
];

const ProjectItemGrid = ({ isList }) => {
    return (
        <div className={`grid ${!isList ? "grid-cols-3" : ""} gap-7`}>
            {projects?.map((project) => (
                <ProjectItemCol
                    key={project.title}
                    title={project.title}
                    datas={project.datas}
                />
            ))}
        </div>
    );
};

const ProjectItemCol = ({ title, datas }) => {
    return (
        <div className="flex flex-col justify-center items-start w-full">
            <h3 className="text-lg font-medium mb-5">
                {title}{" "}
                <span className="text-text_color_2 text-base font-normal">{`(${datas.length})`}</span>
            </h3>
            <div className="flex flex-col justify-start item-center  gap-5 w-full">
                {datas?.map((item, index) => (
                    <ProjectItem
                        key={item.title + index}
                        datas={item}
                    ></ProjectItem>
                ))}
            </div>
        </div>
    );
};

const ProjectItem = ({ datas }) => {
    return (
        <div className="bg-white rounded-lg p-5 w-full">
            <div className="flex justify-between item-center mb-2">
                <h4 className="font-medium text-lg">{datas.title}</h4>
                <span className="flex items-center p-1 cursor-pointer">
                    <IconDots></IconDots>
                </span>
            </div>
            <p className="font-normal text-sm text-text_color_2 mb-5">
                {datas.desc}
            </p>
            <div className="flex justify-start items-center flex-wrap gap-2 mb-5">
                {datas?.tags?.map((tag) => {
                    return (
                        <div
                            key={tag}
                            className="text-[13px] text-[#2EB67D] bg-[rgba(100,203,244,0.2)] px-3 py-2 rounded-md"
                        >
                            {tag}
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <svg
                        width="8"
                        height="16"
                        viewBox="0 0 8 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0.8 7.2C0.358172 7.2 0 6.84183 0 6.4V4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4V6.4C8 6.84183 7.64183 7.2 7.2 7.2C6.75817 7.2 6.4 6.84183 6.4 6.4V4C6.4 2.67452 5.32548 1.6 4 1.6C2.67452 1.6 1.6 2.67452 1.6 4L1.6 6.4C1.6 6.84183 1.24183 7.2 0.8 7.2ZM4 16C1.79086 16 0 14.2091 0 12V9.6C0 9.15817 0.358172 8.8 0.8 8.8C1.24183 8.8 1.6 9.15817 1.6 9.6L1.6 12C1.6 13.3255 2.67452 14.4 4 14.4C5.32548 14.4 6.4 13.3255 6.4 12L6.4 9.6C6.4 9.15817 6.75817 8.8 7.2 8.8C7.64183 8.8 8 9.15817 8 9.6V12C8 14.2091 6.20914 16 4 16ZM3.19995 10.4C3.19995 10.8418 3.55812 11.2 3.99995 11.2C4.44178 11.2 4.79995 10.8418 4.79995 10.4V5.60001C4.79995 5.15818 4.44178 4.80001 3.99995 4.80001C3.55812 4.80001 3.19995 5.15818 3.19995 5.60001L3.19995 10.4Z"
                            fill="#6F767E"
                        />
                    </svg>
                </div>
                <AvatarGroup urls={datas.members} />
            </div>
        </div>
    );
};

const AvatarGroup = ({ urls }) => {
    if (urls.length > 3) {
        urls = urls.splice(0, 3);
    }
    return (
        <div className="flex">
            {urls?.map((url, index) => {
                return (
                    <div
                        key={index}
                        className={`w-[34px] h-[34px]  rounded-full border-2 border-white ${
                            index == 0 ? "mx-0" : "mx-[-6px]"
                        }`}
                    >
                        <Image src={url} />
                    </div>
                );
            })}
        </div>
    );
};

export default ProjectItemGrid;
