import React, { Component } from "react";
import ButtonEmphasis from "../../components/button/button";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>
        <Link href="/dashboard/farm">
          <a>View all wind turbines</a>
        </Link>{" "}
      </h2>
      <h2>
        <Link href="/dashboard/create-farm">
          <a>Add new</a>
        </Link>
      </h2>
    </div>
  );
}
