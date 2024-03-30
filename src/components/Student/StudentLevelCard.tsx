import { FC } from "react";

interface ExtraActivity {
  bookRead: boolean;
  religiousActivity: boolean;
  personalDevelopment: boolean;
}

interface StudentLevel {
  studyRoutine: string;
  humanityLevel: string;
  liesCount: string;
  ordersFollowed: string;
  treePlantation: string;
  extraActivity: ExtraActivity;
  studentEmail: string;
}

interface Props {
  studentLevels: StudentLevel[];
}

const StudentLevelCard: FC<Props> = ({ studentLevels }) => {
  return (
    <div>
      {studentLevels.map((studentLevel, index) => (
        <div key={index} className="rounded dark:bg-[#001d30] bg-white shadow">
          <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <h2 className="text-xl font-semibold mb-2">Student Level</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Study Routine</h3>
                <p>Value: {studentLevel.studyRoutine}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Humanity Level</h3>
                <p>Value: {studentLevel.humanityLevel}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Lies Count</h3>
                <p>Value: {studentLevel.liesCount}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Orders Followed</h3>
                <p>Value: {studentLevel.ordersFollowed}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Tree Plantation</h3>
                <p>Value: {studentLevel.treePlantation}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Extra Activity</h3>
                <p>Book Read: {studentLevel.extraActivity.bookRead ? "Yes" : "No"}</p>
                <p>Religious Activity: {studentLevel.extraActivity.religiousActivity ? "Yes" : "No"}</p>
                <p>Personal Development: {studentLevel.extraActivity.personalDevelopment ? "Yes" : "No"}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentLevelCard;
