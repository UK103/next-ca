import React from 'react'

const page = () => {
    return (
        <div><figure className="md:flex bg-blue-300 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img className="w-80 h-81 rounded-full mx-auto" src="/Screenshot (2).png" alt="" width="384" height="512"/>
        <div className="pt-10 md:p-12 text-center md:text-left space-y-10">
          <blockquote>
            <p className="text-lg font-medium">
              “Meet me I am Choudary Umar Khalid.Engineering, the application of science to the optimum conversion of the resources of nature to the uses of humankind. The field has been defined by the Engineers Council for Professional Development, in the United States, as the creative application of “scientific principles to design or develop structures, machines, apparatus, or manufacturing processes, or works utilizing them singly or in combination; or to construct or operate the same with full cognizance of their design; or to forecast their behaviour under specific operating conditions; all as respects an intended function, economics of operation and safety to life and property.” The term engineering is sometimes more loosely defined, especially in Great Britain, as the manufacture or assembly of engines, machine tools, and machine parts.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              CHOUDARY UMAR KHALID
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              Engineer, Rahim Yar Khan
            </div>
          </figcaption>
        </div>
      </figure></div>
    )
}

export default page