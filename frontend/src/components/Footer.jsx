
  import React from 'react'
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaReact,
  FaCss3Alt,
} from 'react-icons/fa'
import { SiJavascript, SiPostgresql, SiVite } from 'react-icons/si'

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <footer className="bg-green-50 text-green-900 px-6 py-10">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3 items-start">
        {/* Logo */}
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-3xl font-bold text-green-700">ayurherb</h2>
        </div>

        {/* Address and email */}
        <div className="flex flex-col gap-3">
          <div className="flex items-start gap-2">
            <FaMapMarkerAlt className="mt-1" />
            <p>
              Techno Main Salt Lake,
              <br />
              Kolkata, 700068 (West Bengal)
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <p>ayurherb@gmail.com</p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-col gap-4 items-start">
          <p className="font-semibold text-green-800">Technology Stack Used:</p>
          <div className="flex gap-4 text-2xl">
            <FaReact className="text-blue-500" title="React" />
            <SiJavascript className="text-green-600" title="JavaScript/Node.js" />
            <SiPostgresql className="text-yellow-500" title="PostgreSQL/Database" />
            <SiVite className="text-purple-500" title="Vite/VR Icon Placeholder" />
            <FaCss3Alt className="text-blue-600" title="CSS3" />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-8 border-t border-green-200" />

      {/* Footer Bottom */}
      <p className="text-center text-sm">
        © Copyright {year} <span className="font-semibold">AyurHerb</span> – All Rights Reserved.
        Designed and Developed by Team AyurHerb
      </p>
    </footer>
  )
}

export default Footer
