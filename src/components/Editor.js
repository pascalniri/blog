import React from 'react';
import ReactMde, { Suggestion, SaveImageHandler } from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";

const Editor  = () => {
    const [value, setValue] = React.useState("**Hello world!!!**");
    const [selectedTab, setSelectedTab] = React.useState(
      "write"
    );

    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true
      });

  return (
    <div className='editor-container'>
     <div className='editor'>
        <ReactMde
        value={value}
        onChange={setValue}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={markdown =>
            Promise.resolve(converter.makeHtml(markdown))
        }
        // loadSuggestions={loadSuggestions}
        childProps={{
            writeButton: {
                tabIndex: -1
            }
        }}
        // paste={{
        //     saveImage: save
        // }}
        />
        <button className='publish-btn'>PUBLISH</button>
        </div>
        </div>
  )
}

export default Editor;