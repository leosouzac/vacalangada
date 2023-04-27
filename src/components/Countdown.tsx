import React, { Component } from 'react';
import { Container, Item, Label, Title } from './styles';
import './styles.tsx';

interface CountdownProps {
  targetDate: Date;
}

interface CountdownState {
  elapsedTime: number;
}

class Countdown extends Component<CountdownProps, CountdownState> {
  private interval: any;

  constructor(props: CountdownProps) {
    super(props);
    this.state = {
      elapsedTime: this.props.targetDate.getTime() - Date.now(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const elapsedTime = this.props.targetDate.getTime() - Date.now();
      this.setState({ elapsedTime });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { elapsedTime } = this.state;
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const minutes = Math.floor((elapsedTime / 1000 / 60) % 60);
    const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
    const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));

    return (
        <div>
      <Title>SAVE THE DATE</Title>   
      <Container >
        <Item className="countdown-item">
          {days.toLocaleString('en-US', { minimumIntegerDigits: 2 })}
          <Label>Dias</Label>
        </Item>
        <Item className="countdown-item">
          {hours.toLocaleString('en-US', { minimumIntegerDigits: 2 })}
          <Label>Horas</Label>
        </Item>
        <Item className="countdown-item">
          {minutes.toLocaleString('en-US', { minimumIntegerDigits: 2 })}
          <Label>Minutos</Label>
        </Item>
        <Item className="countdown-item">
          {seconds.toLocaleString('en-US', { minimumIntegerDigits: 2 })}
          <Label>Segundos</Label>
        </Item>
      </Container>
      </div>
    );
  }
}

export default Countdown;