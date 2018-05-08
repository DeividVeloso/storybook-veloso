import React from 'react';
import FullHeader from '../src/Main'; // This is our component
import { storiesOf } from '@storybook/react';

storiesOf('React Full Header', module)
    .add('with title', () => <FullHeader title="TDD" />)
    .add('with title and subtitle', () => (
        <FullHeader title="TDD" subtitle="Curso de JS com TDD na prática" />
    ))
    .add('with title, subtitle, bgColor', () => (
        <FullHeader
            title="TDD"
            subtitle="Curso de JS com TDD na prática"
            bgColor="#3299BB"
        />
    ))
    .add('with title, subtitle, bgColor, textColor', () => (
        <FullHeader
            title="TDD"
            subtitle="Curso de JS com TDD na prática"
            bgColor="#3299BB"
            textColor="#FF9900"
        />
    ))
    .add('with title, subtitle, bgColor, textColor, font', () => (
        <FullHeader
            title="TDD"
            subtitle="Curso de JS com TDD na prática"
            bgColor="#3299BB"
            textColor="#FF9900"
            font="cursive"
        />
    ))
    .add('with title, subtitle, bgImg', () => (
        <FullHeader
            title="TDD"
            subtitle="Curso de JS com TDD na prática"
            bgImg=""
        />
    ))
    .add('with title, subtitle, video', () => (
        <FullHeader
            title="TDD"
            subtitle="Curso de JS com TDD na prática"
            video="My_video.mp4"
        />
    ));
