/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,
  cleanup,
  screen,
  act,
  fireEvent,
} from "@testing-library/react";
import {ReportColumnDisplayNumber} from "./DisplayNumber";   
import { Formik } from "formik";
import { Form } from "react-bootstrap";

const initialValues = { testName:"" } 

const handleSubmit = jest.fn();

const testId = 'testColumn-column-1';
 
describe("ReportColumnDisplayPhoneNumber Component", () => {
  // render the ReportColumnDisplayPhoneNumber component
  beforeEach(() => { 
  });

  // after cleanup when test-case execution is done
  afterEach(cleanup); 

  it("renders 123 correctly", async () => {
    
    render(
    <ReportColumnDisplayNumber forColumn="testColumn" rowIndex={1} value={123} /> 
    );

    expect(screen.getByText("123")).toBeInTheDocument();    

  });
 
  it("renders 1234 correctly", async () => {
    
    render(
    <ReportColumnDisplayNumber forColumn="testColumn" rowIndex={1} value={1234} /> 
    );

    expect(screen.getByText("1,234")).toBeInTheDocument();   
    
  });

  it("renders 123.4 correctly", async () => {
    
    render(
    <ReportColumnDisplayNumber forColumn="testColumn" rowIndex={1} value={123.4} /> 
    );

    expect(screen.getByText("123.4")).toBeInTheDocument(); 

  });
 

  it("renders 123.45 correctly", async () => {
    
    render(
    <ReportColumnDisplayNumber forColumn="testColumn" rowIndex={1} value={123.45} /> 
    );

    expect(screen.getByText("123.45")).toBeInTheDocument();
    
  }); 
  
  it("renders null correctly", async () => {
    const noVal:any = null;

    render(
      <ReportColumnDisplayNumber forColumn="testColumn" rowIndex={1} value={noVal} /> 
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<div data-testid=\"testColumn-column-1\"></div>");
  });
 
 
});
