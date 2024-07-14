import { useEffect, useState, useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoading } from "../based/context/LoadingContext";
export const _renderHeader = (props) => {
  return <>Header</>;
};

const initState = {
  job: "",
  jobList: [],
};

const handleSetJob = (payload) => {
  return {
    type: "SET_JOB",
    payload,
  };
};
const handleSetJobList = (payload) => {
  return {
    type: "SET_JOB_LIST",
    payload,
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_JOB":
      return {
        ...state,
        job: action.payload,
      };
    case "SET_JOB_LIST":
      return {
        ...state,
        jobList: [...state.jobList, action.payload],
      };
    default:
  }
};

export default function HomePage() {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initState);

  const { job, jobList } = state;
  const { showLoading, hideLoading } = useLoading();
  useEffect(() => {}, []);

  return (
    <>
      <input
        value={job}
        onChange={(e) => dispatch(handleSetJob(e.target.value))}
      ></input>
      <button
        onClick={() => {
          dispatch(handleSetJobList(job));
        }}
      >
        Add job
      </button>
      <div>
        {jobList &&
          jobList.length > 0 &&
          jobList.map((job) => <div>{job}</div>)}
      </div>
    </>
  );
}
