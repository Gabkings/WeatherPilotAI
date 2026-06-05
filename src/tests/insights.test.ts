// import { generateInsight } from "../utils/insights";
//
// describe("Weather Insights", () => {
//     test("returns rainfall warning", () => {
//         const result =
//             generateInsight([
//                 {
//                     precipitation_probability: 95,
//                 },
//             ]);
//
//         expect(result).toContain(
//             "Heavy rainfall"
//         );
//     });
//
//     test("returns stable weather", () => {
//         const result =
//             generateInsight([
//                 {
//                     precipitation_probability: 10,
//                 },
//             ]);
//
//         expect(result).toContain(
//             "stable"
//         );
//     });
// });