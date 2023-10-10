// import ClassCom from "./components/ClassCom";
// import FunCom from "./components/FunCom";
// import Homepage from "./components/project/homepage";
import PropsFunCom from "./3.props/PropsFunCom";
import PropsClassCom from "./3.props/PropsClasscom";
import PropsChangeCom from "./3.props/PropsChangeCom";
import Fragment from "./4.Map-Key/FragmentCom";
import FragmentCom from "./4.Map-Key/FragmentCom";
import MapKey from "./4.Map-Key/MapKey";

function App() {
  return (
    <div>
      {/* <ClassCom />
      <FunCom /> */}
      {/* <Homepage /> */}
      {/* ==================PropsCom================== */}
      {/* <PropsFunCom name={"urvish"} age={23} /> */}
      {/* <PropsChangeCom name = {"urvish"}/> */}
      {/* <PropsFunCom name={"neel"}/>  */}
      {/* <PropsClassCom data={{ name: "urvish", age: 23 }} />
      <PropsClassCom /> */}
      {/* ==================Fragment================== */}
      {/* <FragmentCom />
      <FragmentCom /> */}
      {/* ==================MapKey================== */}
      {/* <MapKey /> */}
      <CityTables />
    </div>
  );
}

export default App;
