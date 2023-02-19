import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NoPage from "./components/NoPage";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import ProjectDes from "./components/common/project/ProjectDes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchData } from "./components/common/api";
import {
  updateDoc,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import db from './config/firebaseConfig';


function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const update = async (ip, updatedU) => {
    const udata = doc(db,COLLECTION, ip);
    const docSnap = await getDoc(udata);
    if (docSnap.exists()) {
      const data = docSnap.data();
      data.count = data.count + 1;
      data.latestTimeStamp = new Date().toString();
      return await updateDoc(udata, data);
    }
    return await setDoc(udata, updatedU);
  };

  const detectOS = () => {
    if (navigator.userAgent.indexOf("Win") !== -1)
      return "Windows OS";
    if (navigator.userAgent.indexOf("Mac") !== -1)
      return "Macintosh";
    if (navigator.userAgent.indexOf("Linux") !== -1)
      return "Linux OS";
    if (navigator.userAgent.indexOf("Android") !== -1)
      return "Android OS";
    if (navigator.userAgent.indexOf("like Mac") !== -1)
      return "iOS";
  }

  useEffect(() => {
    const fetch = async () => {
      try {
        const fetched = await fetchData(data, setError);
        var canva = document.getElementById("myCanvas");
        var gl = canva.getContext("experimental-webgl");

        const hardinfo = [gl.getParameter(gl.RENDERER),gl.getParameter(gl.VENDOR),getUnmaskedInfo(gl).vendor,getUnmaskedInfo(gl).renderer];

        function getUnmaskedInfo(gl) {
          var unMaskedInfo = {
            renderer: '',
            vendor: ''
          };
    
          var dbgRenderInfo = gl.getExtension("WEBGL_debug_renderer_info");
          if (dbgRenderInfo != null) {
            unMaskedInfo.renderer = gl.getParameter(dbgRenderInfo.UNMASKED_RENDERER_WEBGL);
            unMaskedInfo.vendor = gl.getParameter(dbgRenderInfo.UNMASKED_VENDOR_WEBGL);
          }
          return unMaskedInfo;
        }

        const getData = {
          ip: fetched.ip,
          isMobile: navigator.userAgentData.mobile,
          os: detectOS(),
          cores: navigator.deviceMemory,
          network: fetched.network,
          version: fetched.version,
          city: fetched.city,
          region: fetched.region,
          country: fetched.country_name,
          timeZone: fetched.timezone,
          firstTimeStamp: new Date().toString(),
          latestTimeStamp: new Date().toString(),
          count: 1,
          hardInfo : hardinfo,
        };
        try {
          await update(fetched.ip, getData);
        } catch (err) {
          setError("Error with GC");
        }
        setData(getData);
      } catch (error) {
        setError("Error");
      }
    };
    fetch();
  }, [data, error]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/project/:id" element={<ProjectDes />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      <canvas
        id="myCanvas"
        style={{ display: "none", visibility: "hidden" }}
      >
      </canvas>
    </div>
  );
}

export default App;
