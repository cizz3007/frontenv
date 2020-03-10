import React from 'react'
import Form, {FORM_ENCODING_TYPE, FORM_METHOD} from '../../atoms/form/defaultForm'
import Fieldset from '../../atoms/fieldset/defaultFieldset'
import Legend from '../../atoms/legend/defaultLegend'
import Label from '../../atoms/label/defaultLabel'
import Input from '../../atoms/input/defaultInput'
import Button, {ButtonType} from '../../atoms/button/defaultButton'
import styled from 'styled-components'
// const StyledFieldSet = styled(Fieldset)`
//
// `

class SignUpForm extends React.PureComponent {

  render() {
    return (
        <Form id={'atomic-form'}
              style={{backgroundColor: '#fff'}}
              method={FORM_METHOD.POST}
              encType={FORM_ENCODING_TYPE.DEFAULT}
              onSubmit={(e) => {
                e.preventDefault();
              }}>
          <Fieldset form={'atomic-form'} style={{backgroundColor: '#fff'}}>
            <Legend style={{color: 'red'}}>ATOMIC_TEST</Legend>
            <Label style={{color: 'blue'}}>아이디</Label>
            <Input name={'id'} style={{color: 'green'}}/>
            <Label style={{color: 'blue'}}>비밀번호</Label>
            <Input name={'password'} style={{color: 'blue'}}/>
          </Fieldset>
          <Button type={ButtonType.SUBMIT} style={{color: 'green'}}>가입</Button>
        </Form>
    )
  }
}

export default SignUpForm
