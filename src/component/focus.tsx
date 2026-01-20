import React, {JSX} from 'react'

export function Focus({content} : {content: JSX.Element}) {
    return (
        <div className="cours-focus">
            <div className="cours-focus-content" id="focus-content">
                {content}
            </div>
        </div>
    )
}