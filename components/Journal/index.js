import { useState } from "react";
import sessionNotes from "@/data";
import StyledDivider from "../Divider/StyledDivider";
import { StyledList, StyledTitle } from "../StyledListElements";
import { useRouter } from "next/router";
import useSWR from "swr";
import Button from "@/components/Button";
import Link from "next/link";
import SVGIcon from "../Icons/SVGIcon";
import styled from "styled-components";
import NoteLinkComponent from "../NoteLinkComponent";
import SearchForm from "../SearchForm";

export default function Journal() {
  const [searchInput, setSearchInput] = useState("");
  //  const [notes, setNotes] = useState(sessionNotes);
  const router = useRouter();
  const { data } = useSWR("api/notes");
  console.log("data_Journal", data);

  // data.sort(
  //   (a, b) => new Date(a.date.split("-")) - new Date(b.date.split("-"))
  // );

  if (!data) {
    return <h1>Loading...</h1>;
  }

  if (data) {
    const notes = [...data]
      .reverse()
      .sort(
        (a, b) => new Date(b.date.split("-")) - new Date(a.date.split("-"))
      );
    console.log("notes_sorted", notes);

    // const searchResult = notes.filter((note) =>
    //   note.tags.includes(searchInput)
    // );
    const searchResult = notes.filter((note) =>
      note.topic.toLowerCase().includes(searchInput.toLowerCase())
    );
    console.log("search", searchResult);

    return (
      <>
        <StyledTitle>Journal</StyledTitle>
        <Button variant="plus" href="/create">
          <SVGIcon variant="plus" width="2.5rem" />
        </Button>{" "}
        <SearchForm
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />
        {searchResult.length === 0 && <p>Not found</p>}
        {searchInput.length > 0 &&
          searchResult.map((note) => (
            <StyledList variant="listitem" key={note._id}>
              <li>
                <time>{note.date}</time>
                <h2>{note.topic}</h2>
                <p>Description: {note.description}</p>
                <NoteLinkComponent text="Link: " href={note.link} />
                <NoteLinkComponent text="Challenges: " href={note.challenges} />
                <StyledDivider variant="note" />
                <StyledList variant="tags">
                  {note.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </StyledList>
                <Button variant="more" href={`${note._id}`}>
                  <SVGIcon variant="more" width="3rem" />
                </Button>
              </li>
            </StyledList>
          ))}
        {notes.map((note) => (
          <StyledList variant="listitem" key={note._id}>
            <li>
              <time>{note.date}</time>
              <h2>{note.topic}</h2>
              <p>Description: {note.description}</p>
              <NoteLinkComponent text="Link: " href={note.link} />
              <NoteLinkComponent text="Challenges: " href={note.challenges} />
              <StyledDivider variant="note" />
              <StyledList variant="tags">
                {note.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </StyledList>
              <Button variant="more" href={`${note._id}`}>
                <SVGIcon variant="more" width="3rem" />
              </Button>
            </li>
          </StyledList>
        ))}
      </>
    );
  }
}
