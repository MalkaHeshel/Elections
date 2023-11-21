import React from "react";
import StaticsCities from "./staticsCities";
import StaticsYear from "./staticsYears";
export default function Statics() {
    return (
      <div>
        <h1 className="badge bg-dark w-100 fs-1">סטטיסטיקות</h1>
        <div className="statics">
          <StaticsCities /> <StaticsYear />
        </div>
      </div>
    );
}
