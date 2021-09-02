import React from 'react';
import Post from './post';



export default class NewsFeed extends React.Component {
    render () {
        let comments = [
            {
                content: 'I really loved the duo Travolta/Jackson and the dynamic of the movie',
                username: 'Sarah',
                date: '12-31-21'
            },
            {
            content: 'Tarantino is just a talented realisator and this movie is a classic',
            username: 'Becca',
            date: '12-12-21'
            },
            {
            content: 'Bonjour',
            username: 'Charlene',
            date: '12-12-21'
            }
        ];
        return (
            <div className="container">
                <Post {...{comments: comments, content: "Hitmen Jules Winnfield and Vincent Vega arrive at an apartment to retrieve a briefcase for their boss, gangster Marsellus Wallace, from a business partner, Brett. After Vincent checks the contents of the briefcase, Jules shoots one of Brett's associates. He declaims a passage from the Bible, and he and Vincent kill Brett for trying to double-cross Marsellus. They take the briefcase to Marsellus and wait while he bribes boxer Butch Coolidge to take a dive in his upcoming match. The next day, Vincent purchases heroin from his drug dealer, Lance. He shoots up and drives to meet Marsellus's wife Mia, having agreed to escort her while Marsellus is out of town. They eat at Jack Rabbit Slim's, a 1950s-themed restaurant, and participate in a twist contest, then return home. While Vincent is in the bathroom, Mia finds his heroin and snorts it, mistaking it for cocaine. She suffers an overdose; Vincent rushes her to Lance's house, where they revive her with an injection of adrenaline into her heart. Vincent drops Mia off at her home, and the two agree never to tell Marsellus about the incident."}}/> 
        
            </div>
        );
    }
}