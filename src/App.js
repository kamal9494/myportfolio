import "./App.css";
import Home from "./components/Home";
import NoPage from "./components/NoPage";
import ProjectDes from "./components/common/ProjectDes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchData } from "./components/common/api";
import { updateDoc, doc, getDoc, setDoc } from "firebase/firestore";
import db from "./config/firebaseConfig";
import Loading from "./components/Loading";
import Lottie from "lottie-react";
import animation from "./assets/work-on.json";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [level, setLevel] = useState(1);

  const update = async (ip, updatedU) => {
    const udata = doc(db, process.env.REACT_APP_COLLECTION, ip);
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
    if (navigator.userAgent.indexOf("Win") !== -1) return "Windows OS";
    if (navigator.userAgent.indexOf("Mac") !== -1) return "Macintosh";
    if (navigator.userAgent.indexOf("Android") !== -1) return "Android OS";
    if (navigator.userAgent.indexOf("Linux") !== -1) return "Linux OS";
    if (navigator.userAgent.indexOf("like Mac") !== -1) return "iOS";
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const fetched = await fetchData(data, setError);
        var canva = document.getElementById("myCanvas");
        var gl = canva.getContext("experimental-webgl");
        const hardinfo = [
          gl.getParameter(gl.RENDERER),
          gl.getParameter(gl.VENDOR),
          getUnmaskedInfo(gl).vendor,
          getUnmaskedInfo(gl).renderer,
        ];

        function getUnmaskedInfo(gl) {
          var unMaskedInfo = {
            renderer: "",
            vendor: "",
          };

          var dbgRenderInfo = gl.getExtension("WEBGL_debug_renderer_info");
          if (dbgRenderInfo != null) {
            unMaskedInfo.renderer = gl.getParameter(
              dbgRenderInfo.UNMASKED_RENDERER_WEBGL
            );
            unMaskedInfo.vendor = gl.getParameter(
              dbgRenderInfo.UNMASKED_VENDOR_WEBGL
            );
          }
          return unMaskedInfo;
        }
        const getData = {
          ipAddr: fetched.ip,
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
          hardInfo: hardinfo,
        };
        try {
          await update(fetched.ip, getData);
        } catch (err) {
          console.log(err);
          setError("Error with GC");
        }
        setData(getData);
      } catch (error) {
        console.log(error);
        setError("Error");
      }
      setLoading(false);
    };
    if (data == null) {
      fetch();
    }
  }, [data, error]);

  if (level === 0) {
    return <Main setLevel={setLevel} />;
  }

  return loading ? (
    <Loading />
  ) : (
    <div className="App bg-bg-primary">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/project/:id" element={<ProjectDes />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      <canvas
        id="myCanvas"
        style={{ display: "none", visibility: "hidden" }}
      ></canvas>
    </div>
  );
}

const Main = ({ setLevel }) => {
  return (
    <div className="min-h-screen bg-bg-primary flex flex-col justify-center items-center">
      <h1 className="text-2xl text-white p-2 mb-5">
        Working on improving the design!
      </h1>

      <div className="max-w-4xl flex justify-start">
        <Lottie animationData={animation} />
      </div>

      <span
        className="mt-10 cursor-pointer underline text-white font-medium"
        onClick={() => setLevel(1)}
      >
        view anyway
      </span>
    </div>
  );
};

export default App;
