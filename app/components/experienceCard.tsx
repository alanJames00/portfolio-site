import { BriefcaseIcon, CalendarIcon, CheckCircleIcon } from 'lucide-react'

export default function ExperienceCard({ company, position, startDate, endDate, responsibilities, achievements }: { company: string, position: string, startDate: string, endDate: string, responsibilities: string[], achievements: string[] }) {
  return (
    <div className="bg-gray-900 shadow-lg border-2 rounded-lg overflow-hidden mb-8">
      <div className="bg-gray-700 text-white p-6">
        <h3 className="text-2xl font-bold text-yellow-100 mb-2">{company}</h3>
        <h4 className="text-xl mb-2">{position}</h4>
        <p className="flex items-center text-gray-300">
          <CalendarIcon size={16} className="mr-2" />
          {startDate} - {endDate}
        </p>
      </div>
      <div className="p-6">
        <div className="mb-6">
          <h5 className="text-lg font-semibold mb-3 flex items-center">
            <BriefcaseIcon size={20} className="mr-2 text-gray-600" />
            Responsibilities
          </h5>
          <ul className="list-disc list-inside ">
            {responsibilities.map((item, index) => (
              <li key={index} className="mb-2">{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="text-lg font-semibold mb-3 flex items-center">
            <CheckCircleIcon size={20} className="mr-2 text-gray-600" />
            Key Achievements
          </h5>
          <ul className="list-disc list-inside ">
            {achievements.map((item, index) => (
              <li key={index} className="mb-2">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}