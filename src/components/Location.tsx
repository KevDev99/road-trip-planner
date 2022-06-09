import { FunctionComponent } from "react"
import { IconType } from "react-icons"
import { FaFlag, FaLocationArrow } from "react-icons/fa"

type LocationProps = {
  label: string,
  startYN?: boolean,
  icon: IconType
}

export const Location: FunctionComponent<LocationProps> = ({ label, startYN }) =>
  <div className="location">
    {startYN ? <FaLocationArrow /> : <FaFlag />} {label}
    {startYN && <span>(Start)</span>}
  </div>