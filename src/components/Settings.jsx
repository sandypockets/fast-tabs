import { useEffect, useState } from "react";
import LinkGroup from "./LinkGroup";
import PageButtons from "./PageButtons";

export default function Settings({ changePage, state, setState }) {
  const [subPage, setSubPage] = useState('groups')

  useEffect(() => {
    chrome.storage.local.get(['urls'], function(result) {
      chrome.runtime.sendMessage(result) // Debugging
      for (let url in result.urls.groupOne.urls) {
        setState(prev => ({ ...prev, [url]: result.urls.groupOne.urls[url] }))
      }
      setState(prev => ({ ...prev, groupOneIsPinned: result.urls.groupOne.groupOneIsPinned }))
      for (let url in result.urls.groupTwo.urls) {
        setState(prev => ({ ...prev, [url]: result.urls.groupTwo.urls[url] }))
      }
      setState(prev => ({ ...prev, groupTwoIsPinned: result.urls.groupTwo.groupTwoIsPinned }))
      for (let url in result.urls.groupThree.urls) {
        setState(prev => ({ ...prev, [url]: result.urls.groupThree.urls[url] }))
      }
      setState(prev => ({ ...prev, groupThreeIsPinned: result.urls.groupThree.groupThreeIsPinned }))
    })
  }, [])

  const handleSubmit = () => {
    chrome.runtime.sendMessage({
      id: "setUrls",
      payload: {
        groupOne: {
          urls: {
            urlOne: state.urlOne,
            urlTwo: state.urlTwo,
            urlThree: state.urlThree,
          },
          groupOneIsPinned: state.groupOneIsPinned
        },
        groupTwo: {
          urls: {
            urlFour: state.urlFour,
            urlFive: state.urlFive,
            urlSix: state.urlSix,
          },
          groupTwoIsPinned: state.groupTwoIsPinned
        },
        groupThree: {
          urls: {
            urlSeven: state.urlSeven,
            urlEight: state.urlEight,
            urlNine: state.urlNine,
          },
          groupThreeIsPinned: state.groupThreeIsPinned
        }
      }
    });
    setSubPage('groups')
  }

  const formGroups = {
    groupOne: [
      {
        "label": "URL",
        "type": "text",
        "value": state.urlOne,
        "onChangeFunction": (event) => setState(prev => ({ ...prev, urlOne: event.target.value })),
        "className": "textInput"
      },
      {
        "label": "URL",
        "type": "text",
        "value": state.urlTwo,
        "onChangeFunction": (event) => setState(prev => ({ ...prev, urlTwo: event.target.value })),
        "className": "textInput"
      },
      {
        "label": "URL",
        "type": "text",
        "value": state.urlThree,
        "onChangeFunction": (event) => setState(prev => ({ ...prev, urlThree: event.target.value })),
        "className": "textInput"
      },
      {
        "label": "Pin tabs on open",
        "type": "checkbox",
        "id": "pinnedOnOpen",
        "onChangeFunction":  (event) => setState(prev => ({...prev, groupOneIsPinned: !state.groupOneIsPinned})),
        "checked": state.groupOneIsPinned,
        "value": state.groupOneIsPinned,
        "className": "checkboxLabel",
        "inputClassName": "checkboxInput"
      }
    ],
    groupTwo: [
      {
        "label": "URL",
        "value": state.urlFour,
        "onChangeFunction": (event) => setState(prev => ({ ...prev, urlFour: event.target.value })),
        "className": "textInput"
      },
      {
        "label": "URL",
        "value": state.urlFive,
        "onChangeFunction": (event) => setState(prev => ({ ...prev, urlFive: event.target.value })),
        "className": "textInput"
      },
      {
        "label": "URL",
        "value": state.urlSix,
        "onChangeFunction": (event) => setState(prev => ({ ...prev, urlSix: event.target.value })),
        "className": "textInput"
      },
      {
        "label": "Pin tabs on open",
        "type": "checkbox",
        "id": "pinnedOnOpen",
        "onChangeFunction":  (event) => setState(prev => ({...prev, groupTwoIsPinned: !state.groupTwoIsPinned})),
        "checked": state.groupTwoIsPinned,
        "value": state.groupTwoIsPinned,
        "className": "checkboxLabel",
        "inputClassName": "checkboxInput"
      }
    ],
    groupThree: [
      {
        "label": "URL",
        "value": state.urlSeven,
        "onChangeFunction": (event) => setState(prev => ({ ...prev, urlSeven: event.target.value })),
        "className": "textInput"
      },
      {
        "label": "URL",
        "value": state.urlEight,
        "onChangeFunction": (event) => setState(prev => ({ ...prev, urlEight: event.target.value })),
        "className": "textInput"
      },
      {
        "label": "URL",
        "value": state.urlNine,
        "onChangeFunction": (event) => setState(prev => ({ ...prev, urlNine: event.target.value })),
        "className": "textInput"
      },
      {
        "label": "Pin tabs on open",
        "type": "checkbox",
        "id": "pinnedOnOpen",
        "onChangeFunction":  (event) => setState(prev => ({...prev, groupThreeIsPinned: !state.groupThreeIsPinned})),
        "checked": state.groupThreeIsPinned,
        "value": state.groupThreeIsPinned,
        "className": "checkboxLabel",
        "inputClassName": "checkboxInput"
      }
    ]
  }

  return (
    <>
      <div className="container">
        <div>
          <PageButtons subPage={subPage} setSubPage={setSubPage} />
          {subPage === 'groupOne' &&
            <LinkGroup groupNum={'1'} group={formGroups.groupOne} />
          }
          {subPage === 'groupTwo' &&
            <LinkGroup groupNum={'2'} group={formGroups.groupTwo} />
          }
          {subPage === 'groupThree' &&
            <LinkGroup groupNum={'3'} group={formGroups.groupThree} />
          }
          <div className="saveUrlsContainer card">
            <button className="saveUrls" onClick={handleSubmit}>Save</button>
            <button onClick={() => {
              changePage('home')
            }}>
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  )
}