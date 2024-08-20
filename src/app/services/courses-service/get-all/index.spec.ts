import { getAll } from ".";
import { httpClient } from "@/app/services/httpClient";
import { Course } from "@/app/entities/Course";
import { vi } from "vitest";

vi.mock("@/app/services/httpClient");

describe("getAll", () => {
  it("should return an array of courses", async () => {
    const mockCourses: Array<Course> = [
      {
        id: 1,
        title: "Course 1",
        description: "Description 1",
        modules: [
          {
            id: 1,
            title: "Module 1",
            description: "Description Module 1",
            lessons: [
              {
                id: 1,
                title: "Lesson 1",
                content: "Lesson Content 1",
                description: "Lesson Description 1",
              },
            ],
          },
        ],
      },
      { id: 2, title: "Course 2", description: "Description 2", modules: [] },
    ];

    vi.mocked(httpClient.get).mockResolvedValue({ data: mockCourses });

    const result = await getAll();

    expect(result).toEqual(mockCourses);
    expect(httpClient.get).toHaveBeenCalledWith("/courses");
  });

  it("should throw an error if the request fails", async () => {
    const errorMessage = "Network Error";

    vi.mocked(httpClient.get).mockRejectedValue(new Error(errorMessage));

    await expect(getAll()).rejects.toThrow(errorMessage);
    expect(httpClient.get).toHaveBeenCalledWith("/courses");
  });
});
