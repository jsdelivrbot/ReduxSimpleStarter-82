import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
  let component;

  beforeEach(() => {
    const props = { commenta: ['New Comment', 'Other New Comment'] };
    component = renderComponent(ComponentList, null, props);
  });

  it('shows a LI for each comment', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('shows each coment that is provided', () => {
    expect(component).to.contain('New Comment');
    expect(component).to.contain('Other New Comment');
  });
});
