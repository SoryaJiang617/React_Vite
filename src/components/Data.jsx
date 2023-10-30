import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Carport } from "./Carport";
import { slideIn } from "../utils/motion";

export const Data = ({ setUrl }) => {
  const [formData, setFormData] = useState({
    width: "",
    length: "",
    height: "",
    windspeed: "",
    bays: "",
    slab: true,
  });

  const handleChange = (fieldName) => (e) => {
    setFormData({
      ...formData,
      [fieldName]: e.target.value,
    });
  };

  const onCheckBoxChange = (e) => {
    setFormData({
      ...formData,
      slab: e.target.checked,
    });
  };

  const handleSend = () => {
    const { width, length, slab, height, windspeed, bays } = formData;
    const url = `http://carportbackend.australiaeast.azurecontainer.io/model/glb/${width}/${length}/${height}/${windspeed}/${slab}/${bays}`;
    setUrl(url);
  };

  return (
    <form className="mt-6 flex flex-col gap-2" noValidate>
      <label className="flex flex-col">
        <span className="text-white font-medium mb-4">Width</span>
        <input
          type="text"
          name="width"
          value={formData.width}
          onChange={handleChange("width")}
          placeholder="What's your width?"
          className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
        />
      </label>

      <label className="flex flex-col">
        <span className="text-white font-medium mb-4">Length</span>
        <input
          type="text"
          name="length"
          value={formData.length}
          onChange={handleChange("length")}
          placeholder="What's your length?"
          className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
        />
      </label>

      <label className="flex flex-col">
        <span className="text-white font-medium mb-4">Height</span>
        <input
          type="text"
          name="height"
          value={formData.height}
          onChange={handleChange("height")}
          placeholder="What's your height?"
          className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
        />
      </label>

      <label className="flex flex-col">
        <span className="text-white font-medium mb-4">Windspeed</span>
        <input
          type="text"
          name="windspeed"
          value={formData.windspeed}
          onChange={handleChange("windspeed")}
          placeholder="What's your windspeed?"
          className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
        />
      </label>

      <label className="flex flex-col">
        <span className="text-white font-medium mb-4">Bays</span>
        <input
          type="text"
          name="bays"
          value={formData.bays}
          onChange={handleChange("bays")}
          placeholder="What's your bays?"
          className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
        />
      </label>

      <div className="flex items-center">
        <input
          id="link-checkbox"
          type="checkbox"
          onChange={onCheckBoxChange}
          value=""
          className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          <span className="text-white font-medium mb-4">Slab</span>
        </label>
      </div>

      <button
        onClick={handleSend}
        type="button"
        className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
      >
        Create
      </button>
    </form>
  );
};
