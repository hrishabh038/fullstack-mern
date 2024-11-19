import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
    label: string
    placeholder: string
    value: string
    onChange: (e: any) => void
    className?: string
    inputClass?: string

}

const TextArea = (props: Props) => {
  return (
    <div className={twMerge("flex flex-col items-start gap-1", props.className)}>
      <label className="text-sm text-neutral-400" htmlFor="">
        {props.label}
      </label>
      <textarea
        className={twMerge("px-4 py-1 bg-neutral-700 outline-none rounded-md placeholder:text-neutral-500 placeholder:text-sm w-full", props.inputClass)}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default TextArea;
