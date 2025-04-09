import React from 'react';
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Card from "./Card";

describe("Card Component", () => {
  it("renders title correctly", () => {
    render(<Card title="Test Title" />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });
});
